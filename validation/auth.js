const {check, validationResult} = require('express-validator');

exports.signup = [

    check('firstname')
        .exists()
            .withMessage("Veullez entrer votre prenom")
        .isLength({min:2,max:30})
            .withMessage("Votre prenom doit etre entre 2 et 30 caracteres"),

    check('lastname')
        .exists()
            .withMessage("Veuillez entrer votre nom de famille")
        .isLength({min:2,max:30})
            .withMessage("Votre nom de famille doit etre entre 2 et 30 caracteres"),
    
    check('passphrase')
        .exists()
            .withMessage("Veuillez inserer votre mot de passe")
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]).{8,16}/)
            .withMessage("votre mot de passe ne suit pas les normes définis (ajoute plus de detail plus tard)"),

    check('confirmpassphrase')
        .exists()
            .withMessage("Veuillez inserer votre confirmation du mot de passe")
        .custom((value, { req }) => value === req.body.passphrase)
            .withMessage("Vos 2 mots de passes ne correspondent pas"),
    
    check('email')
        .exists()
            .withMessage("Veuillez inserer votre courriel")
        .isEmail()
            .withMessage("Vous devez inserer un courriel"),
    
    //Est-ce qu'on veut simplement verifier l'ecole par le mail de l'ecole, genre on regarde les courriels
    //avec regex
    check('school')
        .exists()
            .withMessage("Vous devez inserer votre ecole"),
    
    check('birthday')
        .exists()
            .withMessage("Vous devez entrer votre date d'anniversaire"),
    
    (req,res,next) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            //return res.status(422).json({errors:errors.array() });
            console.log(err.errors);
            res.render('error',{errors:err.errors})
        }
        else
            next()
    
    }
]