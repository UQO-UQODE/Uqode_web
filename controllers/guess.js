/* This file is a controler for guess */
require('dotenv').config()
const Account = require('../models/account');
const connect_db = require('../database/db_connect_V3');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const session = require('express-session');

var ssn;

const getHome = (req, res) =>{
    ssn = req.session;
    if(req.session.page_views){
        req.session.page_views++;
        console.log("You visited this page " + req.session.page_views + " times");
     } else {
        req.session.page_views = 1;
        console.log("Welcome to this page for the first time!");
     }
     console.log(ssn)
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

const logUser = async (req,res) =>{
    console.log('Lets login !')
    ssn = req.session;
    //Get user data (id, permission)
    var connection = connect_db();
    const account = Account(connection,DataTypes);
    
    await account.findOne({
        where: { email: req.body.email }
    })
    .then( (user) => {
        
        req.session.user = user
    })
    .catch((err)=>{
        res.send('error',{errors:err})
    })
    res.render('faq');
}

const logout = (req, res) => {
    req.session.destroy(function(err) {
        if(err) {
          console.log(err);
        } else {
          res.redirect('/');
        }
      }); 
}

module.exports = {
    getHome:getHome,
    getFaq:getFaq,
    getRegistration:getRegistration,
    getContactUs:getContactUs,
    getLogin:getLogin,
    createUser:createUser,
    logUser:logUser,
    logout:logout
}
