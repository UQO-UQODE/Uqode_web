
module.exports = (sequelize, DataTypes) => {
  
    const codingEvent = sequelize.define("codingEvent", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      eventName: DataTypes.STRING,
      startDate:  DataTypes.STRING,
      endDate:  DataTypes.STRING,
      decription:  DataTypes.STRING,
      location_id: {
        type: DataTypes.INTEGER,
        references:{
          model:'location',
          key: 'id'
        }
      },
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    console.log("Account model: "+ codingEvent);
    
    //relation ship
    //State.HasMany(Account);
  
    return codingEvent;
  };
  
  
  
