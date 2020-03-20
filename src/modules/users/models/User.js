const { Model } = require('sequelize');
const { Hash } = require('../../../classes');

module.exports = (sequelize, DataTypes) => {
	
	class User extends Model {}

	User.init({
		login: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		password: {
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
		modelName: 'User',
		tableName: 'users',
		name: {
		  singular: 'User',
		  plural: 'Users',
		},
	});

	User.associate = (models) => {

		User.belongsToMany(models.Role, {
			through: models.UserRole,
			foreignKey: 'userId',
			as: 'roles',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		User.hasMany(models.Phone, {
			foreignKey: 'userId',
			as: 'phones',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		User.hasOne(models.UserInfo, {
			foreignKey: 'userId',
			as: 'userInfo',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		User.hasOne(models.Student, {
			foreignKey: 'userId',
			as: 'student',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		User.hasOne(models.Teacher, {
			foreignKey: 'userId',
			as: 'teacher',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

	};
	
	User.beforeCreate(
		(user, options) => user.password = Hash.get(user.password)
	);

	User.prototype.validPassword = async function(password) {
    return await Hash.compare(password, this.password);
  };

  User.beforeUpdate(
    (user) => {
      if (user.password) {
        user.password = Hash.get(user.password);
      }
    }
  );

	return User;

};