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
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Role',
		tableName: 'roles',
		name: {
		  singular: 'Role',
		  plural: 'Roles',
		},
	});

	Role.associate = (models) => {

		Role.belongsToMany(models.ControlPoint, {
			through: models.RoleControlPoint,
			foreignKey: 'roleId',
			as: 'controlPoints',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Role.belongsToMany(models.User, {
			through: models.UserRole,
			foreignKey: 'roleId',
			as: 'users',
			onDelete: 'set default',
			onUpdate: 'cascade'
		});

	};
	
	return Role;
};