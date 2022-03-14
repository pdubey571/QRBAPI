'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurat_images = sequelize.define('restaurat_images', {
    image_name	: DataTypes.STRING,
    restaurant_id: DataTypes.NUMBER,
    status	: DataTypes.NUMBER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  });
  
  return restaurat_images;
};