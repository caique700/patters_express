'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    nome: DataTypes.STRING,
  }, 
  {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    timestamps: false
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};