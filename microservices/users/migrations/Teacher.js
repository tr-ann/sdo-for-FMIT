module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('teacher', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            /* user_id ????????? */
            fullName: {
                allowNull: false,
                type: sequelize.STRING,
            },
            shortName: {
                allowNull: false,
                type: sequelize.STRING,
            },
            department_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'department',
                    key: id,
                    as: 'departmentId',
                },
            },
            position_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'position',
                    key: id,
                    as: 'positionId',
                },
            },
            academic_rank_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'academic_rank',
                    key: id,
                    as: 'academicRankId',
                },
            },
            academic_degree_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'academic_degree',
                    key: id,
                    as: 'academicDegreeId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('teacher');
    }
}