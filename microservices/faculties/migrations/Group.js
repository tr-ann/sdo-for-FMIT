module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('group', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            number: {
                allowNull: false,
                type: Sequelize.STRING(4),
            },
            faculty_id: {
                allowNull: true,
                type: Sequelize.SMALLINT,
            },
            specialty_id: {
                allowNull: true,
                type: Sequelize.SMALLINT,
            },
            study_mode_id: {
                allowNull: true,
                type: Sequelize.SMALLINT,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('group');
    }
};