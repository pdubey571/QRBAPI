'use strict';
module.exports = (sequelize, DataTypes) => {
  const business_sets = sequelize.define('business_sets', {
    restaurent_id: DataTypes.INTEGER,
    schedule_set: DataTypes.STRING,
    status: DataTypes.INTEGER,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'update_ts',
  }, {
    tableName: 'business_sets'
  });
  business_sets.associate = function(models) {
    // associations can be defined here
  };
  return business_sets;
};   