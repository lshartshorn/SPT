const electron = require('electron');
const url = require('url');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('SPT', 'Admin', 'AdminPa55w0rd', {
    dialect: 'sqlite',
    // Windows, MacOS or Linux
    storage: process.env.APPDATA + '\\SPT\\spt.sqlite' || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences/SPT/spt.sqlite' : '/var/local/SPT/spt.sqlite')
});

// Connect all the models/tables in the database to a db object, so everything is accessible via one object
const DB = {};

DB.Sequelize = Sequelize;
DB.Connection = sequelize;

// Models/tables
DB.Grades = require('./models/grade.js')(sequelize, Sequelize);
DB.Subjects = require('./models/subject.js')(sequelize, Sequelize);
DB.Students = require('./models/student.js')(sequelize, Sequelize);
DB.Classes = require('./models/class.js')(sequelize, Sequelize);
DB.ClassGrades = require('./models/classGrade.js')(sequelize, Sequelize);

// Add SubjectID to Classes table
DB.Subjects.hasMany(DB.Classes);

// Create composite key for ClassGrades
DB.Classes.belongsToMany(DB.Students, { through: DB.ClassGrades });
DB.Students.belongsToMany(DB.Classes, { through: DB.ClassGrades });

// Add grades to ClassGrades specifying column name
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term1', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term2', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term3', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term4', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term5', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Term6', sourceKey: 'ID' });
DB.Grades.hasMany(DB.ClassGrades, { foreignKey: 'Target', sourceKey: 'ID' });

DB.Connection.sync()

// Functions for getting data
DB.GetStudentByID = function (ID) {
    return DB.Students.findById(ID);
};

module.exports = DB;