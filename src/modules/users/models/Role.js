const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Role extends Model {};

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

	Role.associate = (models) => {

		Role.belongsToMany(models.url, {
			through: models.role_url,
			foreignKey: 'roleId',
			as: 'urls',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Role.belongsToMany(models.user, {
			through: models.user_role,
			foreignKey: 'roleId',
			as: 'users',
			onDelete: 'set default',
			onUpdate: 'cascade'
		});

	};
	
	return Role;
}