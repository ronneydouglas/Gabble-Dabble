'use strict';
module.exports = function(sequelize, DataTypes) {
  var gabs = sequelize.define('gabs', {
    gabtitle: DataTypes.STRING,
    message: DataTypes.STRING(140),
    createdby: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gabs;
};