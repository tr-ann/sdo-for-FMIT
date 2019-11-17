module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            login: {
                allowNull: false,
                type: sequelize.STRING(100),
            },
            password: {
                allowNull: false,
                type: sequelize.STRING(200),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};