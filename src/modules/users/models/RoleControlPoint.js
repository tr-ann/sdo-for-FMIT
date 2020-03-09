const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class RoleControlPoint extends Model {};

	RoleControlPoint.init({
		roleId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'role_id'
		},
		controlPointId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'control_point_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'RoleControlPoint',
		tableName: 'roles_control_points',
		name: {
		  singular: 'RoleControlPoint',
		  plural: 'RolesControlPoints',
		},
	});

	return RoleControlPoint;
};