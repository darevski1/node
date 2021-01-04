const { Sequelize, DataTypes } = require('sequelize')
const db = require('./../db/database')
const User = require('./User');


const Project = db.define('Project', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'title'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'content'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
},
    {
        timestamps: false,
    },

)
User.associate = (models) => {
    User.belongsTo(models.Project, {
        foreignKey: 'user_id',
        as: "Project",
        odDelete: "CASCADE"
    })
}


module.exports = Project;