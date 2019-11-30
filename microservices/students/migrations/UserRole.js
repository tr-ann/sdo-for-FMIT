module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('UserRole', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                    as: 'userId',
                }
            },
            roleId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'role',
                    key: 'id',
                    as: 'roleId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('UserRole');
    }
}