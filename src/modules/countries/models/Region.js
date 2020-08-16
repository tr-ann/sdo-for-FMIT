const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Region extends Model {};

	Region.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
    },
    countryId: {
			allowNull: false,
      type: DataTypes.STRING(100),
      field: 'country_id',
		},
	}, {
		sequelize,
		charset: 'UTF8',
    engine: 'INNODB',
    timestamps: false,
		modelName: 'Region',
		tableName: 'regions',
		name: {
		  singular: 'Region',
		  plural: 'Regions',
		},
	});

	Region.associate = (models) => {

		Region.hasMany(models.City, {
			foreignKey: 'regionId',
			as: 'cities',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

    Region.belongsTo(models.Country, {
			foreignKey: 'countryId',
			as: 'country',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });
    
	};

	return Region;
};