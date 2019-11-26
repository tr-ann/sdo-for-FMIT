module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Discipline', {
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
            shortName: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Discipline');
    }
};