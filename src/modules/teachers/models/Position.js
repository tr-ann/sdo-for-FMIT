const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Position extends Model {};
	
	Position.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		minRate: {
			allowNull: false,
			type: DataTypes.DOUBLE,
			field: 'min_rate'
		},
		maxRate: {
			allowNull: false,
			type: DataTypes.DOUBLE,
			field: 'max_rate'
		},
		note: {
			allowNull: true,
			type: DataTypes.STRING(2048),
		},
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Position',
		tableName: 'positions',
		name: {
		  singular: 'Position',
		  plural: 'Positions',
		},
	});
	
	Position.associate = (models) => {

		Position.hasMany(models.TeacherPosition, {
			foreignKey: 'positionId',
			as: 'teachers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	};

	return Position;

};