module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('academic_degree', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: sequelize.STRING,
            },
        });
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('academic_degree');
    }
};