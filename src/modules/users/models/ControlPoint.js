const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class ControlPoint extends Model {};

	ControlPoint.init({
		url: {
			allowNull: false,
			type: DataTypes.STRING,
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'ControlPoint',
		tableName: 'control_points',
		name: {
		  singular: 'ControlPoint',
		  plural: 'ControlPoints',
		},
	});

	ControlPoint.associate = (models) => {
		ControlPoint.belongsToMany(models.Role, {
			through: models.RoleControlPoint,
			foreignKey: 'controlPointId',
			as: 'roles',
			onDelete: 'restrict',
			onUpdate: 'restrict',
		});
	};
	
	return ControlPoint;
};