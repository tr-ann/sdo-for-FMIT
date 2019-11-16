module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            login: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING(200),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};