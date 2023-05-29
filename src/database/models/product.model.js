"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var index_1 = require("./index");
var order_model_1 = require("./order.model");
var user_model_1 = require("./user.model");
var ProductModel = index_1["default"].define('Product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    orderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false,
    underscored: true
});
user_model_1["default"].hasMany(order_model_1["default"], { foreignKey: 'userId' });
order_model_1["default"].belongsTo(user_model_1["default"], { foreignKey: 'userId' });
order_model_1["default"].hasMany(ProductModel, { foreignKey: 'orderId', as: 'productIds' });
ProductModel.belongsTo(order_model_1["default"], { foreignKey: 'orderId' });
exports["default"] = ProductModel;
