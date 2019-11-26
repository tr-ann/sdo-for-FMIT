module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('User', {
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
                type: sequelize.STRING(100),
            },
        });
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('User');
    }
};