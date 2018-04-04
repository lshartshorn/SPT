'use strict'

module.exports = (sequelize, DataTypes) => {
    const ClassGrade = sequelize.define('ClassGrade', {
        Notes: DataTypes.TEXT
    });
    return ClassGrade;
};