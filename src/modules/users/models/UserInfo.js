const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class UserInfo extends Model {};

	UserInfo.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id'
		},
		fullName: {
			allowNull: false,
			type: DataTypes.STRING(255),
			field: 'full_name'
		},
		email: {
			allowNull: true,
			type: DataTypes.STRING(255),
		},
		sex: {
			allowNull: true,
			type: DataTypes.STRING(2),
		},
		description: {
			allowNull: true,
			type: DataTypes.TEXT,
		},
		birthday: {
			allowNull: true,
			type: DataTypes.DATE,
		},
		cityId: {
			allowNull: true,
			type: DataTypes.INTEGER,
			field: 'city_id'
		},
		address: {
			allowNull: true,
			type: DataTypes.STRING(255),
		},
		photoId: {
			allowNull: true,
			type: DataTypes.INTEGER,
			field: 'photo_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'UserInfo',
		tableName: 'users_info',
		name: {
		  singular: 'UserInfo',
		  plural: 'UsersInfo',
		},
	});

	UserInfo.associate = (models) => {

		UserInfo.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		UserInfo.belongsTo(models.Resource, {
			foreignKey: 'photoId',
			as: 'photo',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		UserInfo.belongsTo(models.City, {
			foreignKey: 'cityId',
			as: 'city',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	};

	return UserInfo;

};