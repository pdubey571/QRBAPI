'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('master_custmizations', {
    custmization_name: DataTypes.STRING,
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