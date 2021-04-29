/*
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.registration = (req, res) => {
    console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passorwConfirm;

    const {name, email, password, passwordConfirm } = req.body;

    //SQL Injection protection
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length>0){ //means there is already a same existing email
            return res.render('registration', {
                message: 'Ce courriel est déjà utilisé'
            })
        } else if(password !== passwordConfirm){
            return res.render('registration', {
                message: 'Les mots de passe ne sont pas identiques'
            });
        }
        
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword }, (error, results) => {
            if(error){
                console.log(error);
            } else {
               console.log(results);
                return res.render('registration', {
                    message: 'Succès'
                });
            }
        } )

    });


} 

*/