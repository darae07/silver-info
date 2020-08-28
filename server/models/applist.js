'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AppList extends Model {
        static associate(models) {

        }
    }
    AppList.init(
        {
            app_name: DataTypes.STRING,
            question: DataTypes.STRING,
            app_store_url: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'AppList',
        }
    );
    return AppList;
};
