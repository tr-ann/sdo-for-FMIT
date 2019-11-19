module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('department', {
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
            owner_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            phone: {
                allowNull: true,
                type: Sequelize.STRING(30),
            },
            room_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('department');
    }
};