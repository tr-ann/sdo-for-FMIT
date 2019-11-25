module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('LectureRoom', {
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
            typeId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'LessonType',
                  Key: 'id',
                  as: 'typeId'
                },
            },
            buildingId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Building',
                  Key: 'id',
                  as: 'buildingId'
                },
            },
            seatsCount: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('LectureRoom');
    }
};