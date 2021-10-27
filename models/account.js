const val = require('../validation/validate').validate;

module.exports = (sequelize, DataTypes) => {
  
  const Account = sequelize.define("account", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName:{
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type:DataTypes.STRING
    },
    passphrase:  {
      type: DataTypes.STRING
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
    /*team_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'team',
        key: 'id'
      }
    },*/
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