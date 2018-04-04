'use strict'

module.exports = (sequelize, DataTypes) => {
    const Grade = sequelize.define('Grade', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Description: {
            type: DataTypes.STRING(3),
            required: true
        },
    },
        {
            timestamps: false
        }
    );
    return Grade;
};