module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Lesson', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            groupId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Group',
                  Key: 'id',
                  as: 'groupId'
                },
            },
            subgroupId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Subgroup',
                  Key: 'id',
                  as: 'subgroupId'
                },
            },
            teacherId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Teacher',
                  Key: 'id',
                  as: 'teacherId'
                },
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
            roomId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'LectureRoom',
                  Key: 'id',
                  as: 'roomId'
                },
            },
            disciplineId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Discipline',
                  Key: 'id',
                  as: 'disciplineId'
                },
            },
            lessonNumberId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'LessonNumber',
                  Key: 'id',
                  as: 'lessonNumberId'
                },
            },
            weekDay: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Lesson');
    }
};