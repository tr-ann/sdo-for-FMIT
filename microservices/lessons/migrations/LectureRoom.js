module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('lecture_room', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            number: {
                allowNull: false,
                type: Sequelize.STRING(10),
            },
            type_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'lesson_type',
                  Key: 'id',
                  as: 'type_id'
                },
            },
            building_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'building',
                  Key: 'id',
                  as: 'building_id'
                },
            },
            seats_count: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('lecture_room');
    }
};