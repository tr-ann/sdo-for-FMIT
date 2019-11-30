module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('Student', {
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
            groupId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'group',
                    key: 'id',
                    as: 'groupId',
                },
            },
            recordBook: {
                allowNull: false,
                type: sequelize.STRING(30),
            }
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('Student');
    }
}