module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('faculty', {
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
                type: Sequelize.STRING(50),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('faculty');
    }
};