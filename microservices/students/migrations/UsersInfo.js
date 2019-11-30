module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('UserInfo', {
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
            photoId: {
                allowNull: false,
                type: sequelize.INTEGER,
                references: {
                    model: 'resource',
                    key: 'id',
                    as: 'photoId',
                }
            }
        })
    },
    down: (queryInterface, sequelize) => {
        return queryInterface.dropTable('UserInfo');
    }
}