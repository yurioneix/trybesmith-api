"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var index_1 = require("./index");
var OrderModel = index_1["default"].define('Order', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'orders',
    timestamps: false,
    underscored: true
});
exports["default"] = OrderModel;
