/* This file is a controler for guess */
require('dotenv').config()
const Account = require('../models/account');
const connect_db = require('../database/db_connect_V3');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

//create user
const createUser =  (req,res) =>{
    
    //express validator error
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        console.log('error!!!');
        console.log(errors);
        res.render('error');
        //res.status(400).send('Bad Request');
    }else{
        console.log(`Lets create the user ${req.body.firstName}`);
        var connection = connect_db();
        
        const account = Account(connection,DataTypes);
        
        account.create({
            firstName: req.body.firstName,
            lastName:  req.body.lastName,
            email: req.body.email,
            passphrase: bcrypt.hashSync(req.body.passphrase,  bcrypt.genSaltSync(10)),
            school: req.body.school,
            birthday: req.body.birthday,
            state_id: 1,
            permission_id: 1,
            gender_id: 1
        })
        .then(() =>{
            console.log(connection.ValidationError);
            connection.close();
        })
        
        .then(()=>{
            res.render('HomePage');
        })
        .catch((err) =>{
            /*console.log("alloooooooooooooooooooooooooooooooooooooooooooo");
            console.log(typeof err);*/
            //console.log("DB ERROR: " + err);
            res.render('error',{error:err});
        });

    }
}

exports.createUser = createUser;
