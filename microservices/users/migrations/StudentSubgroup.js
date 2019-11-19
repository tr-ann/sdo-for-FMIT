module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('student_vs_subgroup', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            student_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'student',
                    key: id,
                    as: 'studentId',
                }
            },
            subgroup_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'subgroup',
                    key: id,
                    as: 'subgroupId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('role');
    }
}