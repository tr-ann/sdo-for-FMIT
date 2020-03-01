const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class Curator extends Model {}
	
	Curator.init({
		teacher_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		group_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'curator',
	});

	Curator.associate = function (models) {
		Curator.belongsTo(models.teacher, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'teacher_id',
			as: 'teachers',
		});
		Curator.belongsTo(models.group, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'group_id',
			as: 'groups',
		});
	}
	
	return Curator;
}