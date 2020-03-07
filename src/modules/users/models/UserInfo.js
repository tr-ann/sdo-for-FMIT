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
			allowNull: true,
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
			validate: {
				isEmail: true,
			}
		},
		sex: {
			allowNull: false,
			type: DataTypes.STRING(10),
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
		resourceId: {
			allowNull: true,
			type: DataTypes.INTEGER,
			field: 'resource_id'
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'user_info',
		tableName: 'users_info',
	});

	UserInfo.associate = (models) => {

		UserInfo.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		UserInfo.belongsTo(models.resource, {
			foreignKey: 'resourceId',
			as: 'resource',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

	}

	return UserInfo;

}