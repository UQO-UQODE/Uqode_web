
//Validate user
const validation = (req, res, next) =>{
    console.log(`here I validate ${req.body.name} information`);
    next();
}

module.exports = validation 