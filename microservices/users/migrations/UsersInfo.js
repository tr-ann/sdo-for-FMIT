module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('user_info', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER,
            },
            description: {
                allowNull: true,
                type: sequelize.TEXT,
            },
            birthday: {
                allowNull: false,
                type: DATE,
            },
            city: {
                allowNull: false,
                type: sequelize.STRING,
            },
            address: {
                allowNull: true, // ????
                type: sequelize.STRING,
            },
            photo_id: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'resource',
                    key: id,
                    as: 'photoId',
                }
            }
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('user_info');
    }
}