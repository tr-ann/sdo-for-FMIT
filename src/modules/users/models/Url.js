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
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Url',
		tableName: 'urls',
		name: {
		  singular: 'Url',
		  plural: 'Urls',
		},
	});

	Url.associate = (models) => {

		Url.belongsToMany(models.Role, {
			through: models.RoleUrl,
			foreignKey: 'urlId',
			as: 'roles',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

	};
	
	return Url;
}