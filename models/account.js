const val = require('../validation/validate').validate;

module.exports = (sequelize, DataTypes) => {
  
  const Account = sequelize.define("account", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName:{
      type: DataTypes.STRING,
      validate:val.firstName()
    },
    lastName: {
      type: DataTypes.STRING,
      validate:val.lastName()
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        isUnique: (value, next) => {
          Account.findAll({
            where: { email: value },
            attributes: ['id'],
          })
            .then((account) => {
              if (account.length != 0)
                next(new Error('Email address already in use!'));
              next();
            })
            //.catch((onError) => console.log("LE EREEEEEEEYR: "+onError));
        },
      },
      //validate: val.email()
    },
    passphrase:  {
      type: DataTypes.STRING,
      /*validation:{
        is:{
          args:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]).{8,16}/,
          msg:"Your password must have at least one capitalize letter, on minimalize letter, one special character and btw 8-16"
        }
      },*/
      validation: val.passphrase()
    },
    school: DataTypes.STRING,
    birthday: DataTypes.DATE,
    state_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'state',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'permission',
        key: 'id'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'gender',
        key: 'id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'team',
        key: 'id'
      }
    },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  console.log("Account model: "+ Account);
  
  //relation ship
  //State.HasMany(Account);

  return Account;
};





/*
class User {

    constructor(){ 
        this.firstName = "",
        this.lastName = "",
        this.email = "",
        this.passphrase = "",
        this.state_id = null,
        this.permission_id = null,
        this.school = "",
        this.birtday =  "",
        this.gender_id = null
    }

    save() {
        
    };
}*/



//module.exports = User;