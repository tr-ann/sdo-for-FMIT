module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('LessonNumber', {
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
            startTime1: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            endTime1: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            startTime2: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            endTime2: {
                allowNull: false,
                type: Sequelize.TIME,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('LessonNumber');
    }
};