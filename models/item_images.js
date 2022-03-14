'use strict';
module.exports = (sequelize, DataTypes) => {
  const item_images = sequelize.define('item_images', {
    item_id	: DataTypes.NUMBER,
    image: DataTypes.STRING,
    type	: DataTypes.NUMBER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  });
  
  return item_images;
};