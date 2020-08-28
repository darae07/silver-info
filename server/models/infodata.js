'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InfoData extends Model {
    static associate(models) {
      // define association here
      InfoData.hasMany(models.User, {
        onDelete: 'cascade',
      });
    }
  }
  InfoData.init(
    {
      data_url: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'InfoData',
    }
  );
  return InfoData;
};
