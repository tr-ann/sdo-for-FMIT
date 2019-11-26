module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('StudentSubgroup', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            studentId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'student',
                    key: 'id',
                    as: 'studentId',
                }
            },
            subgroupId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'subgroup',
                    key: 'id',
                    as: 'subgroupId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('StudentSubgroup');
    }
}