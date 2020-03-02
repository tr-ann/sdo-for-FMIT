const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Url extends Model {}

	Url.init({
		url: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'url',
	});

	Url.associate = function (models) { 
		Url.belongsToMany(models.role, {
			through: models.role_url,
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'url_id',
			otherKey: 'role_id',
			as: 'roles',
		})
	};
	
	return Url;
}