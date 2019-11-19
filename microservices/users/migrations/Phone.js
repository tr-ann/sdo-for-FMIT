module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('phone', {
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
                },
            },
            phone: {
                allowNull: false,
                type: sequelize.STRING(30),
            },
        });
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('phone');
    }
};