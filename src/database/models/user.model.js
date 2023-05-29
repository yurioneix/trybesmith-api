"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var index_1 = require("./index");
var UserModel = index_1["default"].define('User', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    vocation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false,
    underscored: true
});
exports["default"] = UserModel;
