'use strict';
const { Model } = require('sequelize');
const crypto = require('crypto');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.InfoData, {
                onDelete: 'cascade',
            });
        }
    }
    User.init(
        {
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    return User;
};