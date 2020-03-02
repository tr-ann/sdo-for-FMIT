const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class UserRole extends Model {}

	UserRole.init({
		user_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		role_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'user_role',
		tableName: 'users_roles',        
	})

	UserRole.associate = function (models) {
		UserRole.belongsTo(models.user, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'user_id',
			as: 'users',
		})
		UserRole.belongsTo(models.role, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'role_id',
			as: 'roles',
		})
	}
	
	return UserRole
}