const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class RoleUrl extends Model {};

	RoleUrl.init({
		roleId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'role_id'
		},
		urlId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'url_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'role_url',
		tableName: 'roles_urls',
	});

	return RoleUrl;
	
};