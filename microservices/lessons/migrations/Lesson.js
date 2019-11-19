module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('lesson', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            /*
            Не уверен, как организовать возможность,
            где либо подгруппа NULL, либо группа NULL
            */
            group_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'group',
                  Key: 'id',
                  as: 'group_id'
                },
            },
            subgroup_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'subgroup',
                  Key: 'id',
                  as: 'subgroup_id'
                },
            },
            teacher_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'teacher',
                  Key: 'id',
                  as: 'teacher_id'
                },
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
            /*
            Не уверен, может ли быть обущен номер аудитории (может даже у спорт. зала есть)
            Также есть, например, небольшие помещения для уборщиц :)
            */
            room_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                  model: 'lecture_room',
                  Key: 'id',
                  as: 'room_id'
                },
            },
            discipline_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'discipline',
                  Key: 'id',
                  as: 'discipline_id'
                },
            },
            lesson_number_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'lesson_number',
                  Key: 'id',
                  as: 'lesson_number_id'
                },
            },
            week_day: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('lesson');
    }
};