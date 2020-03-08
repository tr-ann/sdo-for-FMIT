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
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Curator',
		tableName: 'curators',
		name: {
		  singular: 'Curator',
		  plural: 'Curators',
		},
	});
	
	return Curator;
	
};