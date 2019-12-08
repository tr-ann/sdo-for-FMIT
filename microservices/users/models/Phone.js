import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Phone extends Model {}

    Phone.init({
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING(30),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'phone',

        name: {
            simple: 'phone',
            plural: 'phones',
        }
    })
    
    Phone.associate = function (models) {
        Phone.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
    }
    return Phone;
}