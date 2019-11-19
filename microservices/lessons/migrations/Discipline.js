module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('discipline', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            short_name: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('discipline');
    }
};