'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('items', {
    name: DataTypes.STRING,
    restaurant_id	: DataTypes.NUMBER,
    category: DataTypes.STRING,
    item_description: DataTypes.STRING,
    status: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  });
  

  item.associate = function(models) {
    // user.hasOne(models.user_role,  {foreignKey: {
    //         name: 'user_id',
    //         fieldName: 'id'
    //       }});  
  };
  return item;
};