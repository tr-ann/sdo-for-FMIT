module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('student', {
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
            group_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'group',
                    key: id,
                    as: 'groupId',
                },
            },
            record_book: {
                allowNull: false,
                type: sequelize.STRING(30),
            }
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('student');
    }
}