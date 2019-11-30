module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('Curator', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            teacherId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'teacher',
                    key: 'id',
                    as: 'teacherId',
                },
            },
            groupId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'group',
                    key: 'id',
                    as: 'groupId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('Curator');
    }
}