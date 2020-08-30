const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class City extends Model {};

	City.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
    regionId: {
			allowNull: false,
      type: DataTypes.INTEGER,
      field: 'region_id',
		},
	}, {
		sequelize,
		charset: 'UTF8',
    engine: 'INNODB',
    timestamps: false,
		modelName: 'City',
		tableName: 'cities',
		name: {
		  singular: 'City',
		  plural: 'Cities',
		},
	});

	City.associate = (models) => {

		City.belongsTo(models.Region, {
			foreignKey: 'regionId',
			as: 'region',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});
		
		City.hasMany(models.UserInfo, {
			foreignKey: 'cityId',
			as: 'users',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});
		
		City.hasMany(models.StudentInfo, {
			foreignKey: 'cityId',
			as: 'students',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });
    
	};

	return City;
};