module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('subgroup', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            group_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('subgroup');
    }
};