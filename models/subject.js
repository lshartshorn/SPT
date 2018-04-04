'use strict'

module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Description: {
            type: DataTypes.STRING,
            required: true
        }
    },
        {
            timestamps: false
        }
    );
    return Subject;
};