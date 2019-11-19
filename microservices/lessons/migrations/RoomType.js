module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('room_type', {
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
        return queryInterface.dropTable('room_type');
    }
};