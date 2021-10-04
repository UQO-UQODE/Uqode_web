/* This file is a controler for guess */
require('dotenv').config()
const Account = require('../models/account');
const connect_db = require('../database/db_connect_V3');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

const getHome = (req, res) =>{
    res.render('HomePage');
}

const getFaq = (req, res) =>{
    res.render('faq');
}

const getRegistration = (req, res) =>{
    res.render('registration');
}

const getContactUs = (req, res) =>{
    res.render('contact-us');
}

const getLogin = (req, res) =>{
    res.render('connexion');
}

//create user
const createUser =  (req,res) =>{

    console.log(`Lets create the user ${req.body.firstName}`);
    var connection = connect_db();

    const account = Account(connection,DataTypes);
    
    const alreadyExist = account.findOne({ where: { email: req.body.email } })
    
    if(alreadyExist === null){
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
            connection.close();
            res.render('error',{errors:err});
        });
    }else{
        res.render('connexion');
    }
    
}

const logUser = (req,res) =>{
    
    //Get data and log the user
    var connection = connect_db();

    connection.where


    res.render('faq');
}

module.exports = {
    getHome:getHome,
    getFaq:getFaq,
    getRegistration:getRegistration,
    getContactUs:getContactUs,
    getLogin:getLogin,
    createUser:createUser,
    logUser:logUser
}
