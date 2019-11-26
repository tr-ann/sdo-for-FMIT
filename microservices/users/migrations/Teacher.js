module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('Teacher', {
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
            departmentId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'department',
                    key: 'id',
                    as: 'departmentId',
                },
            },
            position_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'position',
                    key: 'id',
                    as: 'positionId',
                },
            },
            academicRankId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'academicRank',
                    key: 'id',
                    as: 'academicRankId',
                },
            },
            academicDegreeId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'academicDegree',
                    key: 'id',
                    as: 'academicDegreeId',
                },
            },
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('Teacher');
    }
}