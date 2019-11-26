module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Building', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(200),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Building');
    }
};