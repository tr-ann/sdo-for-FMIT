import Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {

    const Discipline = sequelize.define('discipline', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
    }, {
        underscored: true,
        name: {
            singular: 'Discipline',
            plural: 'Disciplines',
        },
    })

    Discipline.associate = function(models) {
        let l = new Sequelize.
        Discipline.hasMany(models.lesson, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return Discipline;
};