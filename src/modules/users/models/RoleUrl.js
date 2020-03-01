const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class RoleUrl extends Model {}

	RoleUrl.init({
		role_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		url_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'role_url',
		tableName: 'roles_urls',
	})

	RoleUrl.associate = function (models) {
		RoleUrl.belongsTo(models.url, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'url_id',
			as: 'urls'
		})
		RoleUrl.belongsTo(models.role, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'role_id',
			as: 'roles'
		})
	}
	return RoleUrl;
};