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
			allowNull: false,
			type: DataTypes.STRING(255),
		},
		sex: {
			allowNull: false,
			type: DataTypes.STRING(2),
		},
		description: {
			allowNull: true,
			type: DataTypes.TEXT,
		},
		birthday: {
			allowNull: false,
			type: DataTypes.DATE,
		},
		city: {
			allowNull: true,
			type: DataTypes.STRING(255),
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
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		UserInfo.belongsTo(models.Resource, {
			foreignKey: 'photoId',
			as: 'photo',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

	};

	return UserInfo;

};