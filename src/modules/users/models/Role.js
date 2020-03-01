const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Role extends Model {}

	Role.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'role',
	})

	Role.associate = function (models) {
		Role.belongsToMany(models.url, {
			through: models.role_url,
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'role_id',
			otherKey: 'url_id',
			as: 'urls',
		})
		Role.belongsToMany(models.user, {
			through: models.user_role,
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'role_id',
			otherKey: 'user_id',
			as: 'roles',
		})
	};
	
	return Role;
}