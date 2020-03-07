const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class Url extends Model {};

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

	Url.associate = (models) => {

		Url.belongsToMany(models.role, {
			through: models.role_url,
			foreignKey: 'urlId',
			as: 'roles',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

	};
	
	return Url;
}