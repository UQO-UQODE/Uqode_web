
const {check} = require('express-validator');
const { DataTypes } = require('sequelize');

var validate_user = () =>{
    return [
        check('firstName').exists().isLength({max:10}),
        check('lastName').exists().isLength({max:30}),
        check('email').exists().isEmail(),
        /* password rule 
            num character: 8-16
            1 uppercase and 1 lowercase
            at least one special character
        */
        //check('passphrase').exists().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]).{8,16}/),
        check('school').isLength({max:2})
    ]
}

var firstName2 = () => {
    return {
        type: DataTypes.STRING,
        validate:{
          len: {
            args:[2,30],
            msg:"Your first name must be between 2 and 30 characters"
          }
        },
      }
}

var firstName = () => {
    return {
        len: {
          args:[2,30],
          msg:"Your first name must be between 2 and 30 characters"
        }
      }
}

var lastName = () =>{
  return {
    len: {
      args:[2,30],
      msg:"Your last name must be between 2 and 30 characters"
    }
  }
}

//email validation is in the model 
var email = () =>{
  console.log('Want to verify email ;) ')
  return {
    isUnique: (value, next) => {
      console.log('entre dans isUnique')
      Account.findAll({
        where: { email: value },
        attributes: ['id'],
      })
        .then((account) => {
          console.log('account: ')
          console.log(account)
          if (account.length != 0)
            next(new Error('Email address already in use!'));
          next();
        })
        .catch((onError) => console.log("LE EREEEEEEEYR: "+onError));
    },
  }
}

var passphrase = () =>{
  return {
    is:{
      args:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]).{8,16}/,
      msg:"Your password must have at least one capitalize letter, on minimalize letter, one special character and btw 8-16"
    }
  }
}
exports.validate = {
    user: validate_user,
    firstName: firstName,
    lastName: lastName,
    email: email,
    passphrase: passphrase
};

