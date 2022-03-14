'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    status: DataTypes.INTEGER,
    business_name: DataTypes.STRING,
    business_location: DataTypes.STRING,
    business_est_since: DataTypes.STRING,
    business_description:DataTypes.STRING,
    business_definition:DataTypes.STRING,
    user_type:DataTypes.INTEGER,
    logo: DataTypes.STRING,
    website: DataTypes.STRING,
    welcome_asset:DataTypes.STRING,
    create_ts:DataTypes.DATE,
    updated_ts:DataTypes.DATE,
  }, {
    timestamps:true,
    createdAt: 'create_ts',
    updatedAt: 'updated_ts',
  });
  // user.associate = function(models) {
  //   // associations can be defined here
  // };


  user.associate = function(models) {
    // user.hasOne(models.user_role,  {foreignKey: {
    //         name: 'user_id',
    //         fieldName: 'id'
    //       }});  
  };
  return user;
};