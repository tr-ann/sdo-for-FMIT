module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('lesson_type', {
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('lesson_type');
    }
};