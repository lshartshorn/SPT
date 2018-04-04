'use strict'

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        FirstName: {
            type: DataTypes.STRING(3),
            required: true
        },
        LastName: {
            type: DataTypes.STRING(3),
            required: true
        },
    },
        {
            timestamps: false
        }
    );
    return Student;
};