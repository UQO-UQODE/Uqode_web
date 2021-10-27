/* This file is a controler for guess */
require('dotenv').config()
const Account = require('../models/account');
const Faq = require('../models/faq');
const connect_db = require('../database/db_connect_V3');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const session = require('express-session');
const connect = require('../database/db_connect_V3');

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
    var connection = connect_db();

    const faq = Faq(connection,DataTypes);
    
    faq.findAll()
    .then((questions)=>{
        connection.close()
        res.render('faq',{questions:questions})
    })
    .catch((err)=>{
        res.render('error',{errors:err})
    }) 
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

    console.log(`Lets create the user ${req.body.firstname}`);
    var connection = connect_db();

    const account = Account(connection,DataTypes);
    
    account.findOne({ where: { email: req.body.email } })
    .then( (alreadyExist)=>{
        console.log('entrer')
        if(alreadyExist === null){
            account.create({
                firstName: req.body.firstname,
                lastName:  req.body.lastname,
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
    })
}

const logUser = async (req,res) =>{
    console.log('Lets login !')
    ssn = req.session;
    //Get user data (id, permission)
    var connection = connect_db();
    const account = Account(connection,DataTypes);

    await account.findOne({
        where: {email: req.body.email}
    })
    .then( (user) => {
    
        bcrypt.compare(req.body.passphrase, user.passphrase, function(err, result) {
            if(result){
                req.session.user = user
                res.render('HomePage');
            }else{
                console.log('test 1')
                res.render('error',{errors:err})
            }
        });
    })
    .catch((err)=>{
        console.log('ERROR')
        console.log(err)
        res.render('error',{errors:err})
    })
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

const putFaq = (req, res) =>{

    var connection = connect_db();
    const faq = Faq(connection,DataTypes);
    faq.create({
        question:req.body.question,
        response:req.body.response
    })
    .then(()=>{
        console.log(connection.ValidationError);
        connection.close();
    })
    .then(()=>{
        getFaq(req, res)
        //res.redirect('http://localhost:3000/faq')
        //res.render('faq');
    })
    .catch((err) =>{
        connection.close();
        res.render('error',{errors:err});
    });
}

const patchFaq = (req, res) =>{
    var connection = connect_db();
    const faq = Faq(connection,DataTypes);
    faq.update({
        question:req.body.question,
        response:req.body.response
    },{
        where:{id:req.body.id}
    })
    .then((questions)=>{
        connection.close()
        getFaq(req, res)
        //res.render('faq',{questions:questions})
    })
    .catch((err) => {
        res.render('error',{errors:err})
    })
}

const deleteFaq = (req, res)=>{
    var connection = connect_db();
    const faq = Faq(connection,DataTypes);
    faq.destroy({
        where:{id:req.body.id}
    })
    .then((questions)=>{
        connection.close()
        getFaq(req, res)
        //res.render('faq',{questions:questions})
    })
    .catch((err)=>{
        res.render('error',{errors:err})
    })
}

module.exports = {
    getHome:getHome,
    getFaq:getFaq,
    getRegistration:getRegistration,
    getContactUs:getContactUs,
    getLogin:getLogin,
    createUser:createUser,
    logUser:logUser,
    logout:logout,
    putFaq:putFaq,
    patchFaq:patchFaq,
    deleteFaq:deleteFaq
}
