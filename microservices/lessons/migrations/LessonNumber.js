module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('lesson_number', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            number: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            start_time1: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            end_time1: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            start_time2: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            end_time2: {
                allowNull: false,
                type: Sequelize.TIME,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('lesson_number');
    }
};