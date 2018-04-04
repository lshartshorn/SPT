'use strict'

module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('Class', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        YearGroup: {
            type: DataTypes.INTEGER,
            required: true
        },
        ClassNum: {
            type: DataTypes.INTEGER,
            required: true
        },
        InUse: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    });
    return Class;
};