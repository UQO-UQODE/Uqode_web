
const {check} = require('express-validator');

exports.validate = (method) => {
    
    switch(method){
        case 'user':{
            return [
                check('firstName').exists().isLength({max:30}),
                check('lastName').exists().isLength({max:30}),
                check('email').exists().isEmail(),
                check('passphrase').exists().isLength({min:8}),
                check('school').isLength({max:30})
            ]
        } 
                
    }
    
}