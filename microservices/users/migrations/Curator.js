module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('curator', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            teacher_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'teacher',
                    key: id,
                    as: 'teacherId',
                },
            },
            group_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'group',
                    key: id,
                    as: 'groupId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('curator');
    }
}