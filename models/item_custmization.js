'use strict';
module.exports = (sequelize, DataTypes) => {
  const item_custmizations = sequelize.define('item_custmizations', {
    title:DataTypes.STRING,
    detail:DataTypes.STRING,
    item_id	: DataTypes.NUMBER,
    image: DataTypes.STRING,
    type	: DataTypes.NUMBER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  });
  
  return item_custmizations;    
};