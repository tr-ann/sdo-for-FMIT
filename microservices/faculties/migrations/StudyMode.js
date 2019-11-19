module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('study_mode', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(45),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('study_mode');
    }
};