module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('specialty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            code: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            short_name: {
                allowNull: false,
                type: Sequelize.STRING(60),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('specialty');
    }
};