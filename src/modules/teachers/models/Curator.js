const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class Curator extends Model {};
	
	Curator.init({
		teacherId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'teacher_id'
		},
		groupId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'group_id'
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'curator',
	});
	
	return Curator;
	
}