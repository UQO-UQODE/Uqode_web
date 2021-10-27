const val = require('../validation/validate').validate;

module.exports = (sequelize, DataTypes) => {
  
  const Faq = sequelize.define("faq", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    question:{
      type: DataTypes.STRING
    },
    response: {
      type: DataTypes.STRING
    }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  console.log("Faq model: "+ Faq);

  return Faq;
};
