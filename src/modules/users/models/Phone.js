const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class Phone extends Model {};

	Phone.init({
		userId: {
			type: DataTypes.INTEGER,
			field: 'user_id'
		},
		phone: {
			allowNull: false,
			type: DataTypes.STRING(30)
		},
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Phone',
		tableName: 'phones',
		name: {
		  singular: 'Phone',
		  plural: 'Phones',
		},
	});
	
	Phone.associate = (models) => {

		Phone.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'restrict',
			onUpdate: 'cascade'
		});

	}

	return Phone;

}