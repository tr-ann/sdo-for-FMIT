module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('user_role', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            user_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: id,
                    as: 'userId',
                }
            },
            role_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'role',
                    key: id,
                    as: 'roleId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('role');
    }
}