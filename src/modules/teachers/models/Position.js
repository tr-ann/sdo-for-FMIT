const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Position extends Model {};
	
	Position.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'position',
	});
	
	Position.associate = (models) => {

		Position.hasMany(models.teacher, {
			foreignKey: 'positionId',
			as: 'teachers',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

	}

	return Position;

}