const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Country extends Model {};

	Country.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
	}, {
		sequelize,
		charset: 'UTF8',
    engine: 'INNODB',
    timestamps: false,
		modelName: 'Country',
		tableName: 'countries',
		name: {
		  singular: 'Country',
		  plural: 'Countries',
		},
	});

	Country.associate = (models) => {

		Country.hasMany(models.Region, {
			foreignKey: 'countryId',
			as: 'regions',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });
    
	};

	return Country;
};