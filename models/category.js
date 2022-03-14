'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('item_categories', {
    category_name: DataTypes.STRING,
    category_description: DataTypes.STRING,
    parent_category: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  }, {
    tableName: 'item_category'
  });
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};   