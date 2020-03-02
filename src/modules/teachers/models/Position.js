const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Position extends Model {}
	
	Position.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'position',
	})
	
	Position.associate = function (models) {
		Position.hasMany(models.teacher, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'position_id',
			as: 'teachers',
		})
	}

	return Position
}