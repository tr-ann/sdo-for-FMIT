import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Url extends Model {}

    Url.init({
        url: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'url',
        name: {
            simple: 'url',
            plural: 'urls',
        }
    });

    Url.associate = function (models) { 
        Url.belongsToMany(models.role, {
            through: models.role_url,
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'url_id',
            otherKey: 'role_id'
        })
    };
    
    return Url;
}