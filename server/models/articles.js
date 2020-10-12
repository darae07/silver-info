'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {
        static associate(models) {

        }
    }
    Article.init(
        {
            title: DataTypes.STRING,
            text: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Article',
        }
    );
    return Article;
};
