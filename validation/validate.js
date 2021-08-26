/* THIS FILE IS NOT USE ! THE VALIDATION IS IN THE MODEL FILE FOR NOW */

const {check} = require('express-validator');

var validate_user = () =>{
    return [
        check('firstName').exists().isLength({max:30}),
        check('lastName').exists().isLength({max:30}),
        check('email').exists().isEmail(),
        /* password rule 
            num character: 8-16
            1 uppercase and 1 lowercase
            at least one special character
        */
        check('passphrase').exists().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]).{8,16}/),
        check('school').isLength({max:30})
    ]
}

var validate_user2 = () => {
    return {
        len: {
          args:[2,30],
          msg:"Your name must be between 2 and 30 characters"
        }
    }
}

exports.validate = {
    user: validate_user,
    user2: validate_user2
};

