module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('info_faculty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            phone_number: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('info_faculty');
    }
};