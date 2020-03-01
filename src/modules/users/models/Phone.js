const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Phone extends Model {}

	Phone.init({
		user_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		phone: {
			allowNull: false,
			type: DataTypes.STRING(30),
		},
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'phone',
	})
	
	Phone.associate = function (models) {
		Phone.belongsTo(models.user, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'user_id',
		})
	}
	return Phone;
}