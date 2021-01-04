const { Sequelize, DataTypes } = require('sequelize')
const db = require('./../db/database');
const Project = require('./Project');



const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        field: 'first_name',
    },
    email: {
        type: DataTypes.STRING,
        field: 'email'

    },
    user_password: {
        type: DataTypes.STRING,
        field: 'user_password'

    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
})
Project.associate = (models) => {
    Project.hasMany(models.User, {
        foreignKey: 'userId',
        as: "users"
    })
}

module.exports = User;
// console.log(User === db.models.User); // true