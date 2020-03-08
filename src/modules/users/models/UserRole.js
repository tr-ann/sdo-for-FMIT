const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class UserRole extends Model {};

	UserRole.init({
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id'
		},
		roleId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'role_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'user_role',
		tableName: 'users_roles',        
	});
	
	return UserRole;
	
}