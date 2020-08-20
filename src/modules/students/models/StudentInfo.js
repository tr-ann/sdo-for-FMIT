const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class StudentInfo extends Model {};

	StudentInfo.init({
		studentId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'student_id',
    },
    cityId: {
			allowNull: true,
			type: DataTypes.INTEGER,
			field: 'city_id',
    },
    address: {
			allowNull: true,
			type: DataTypes.STRING(255),
    },
    sex: {
			allowNull: true,
			type: DataTypes.STRING(1),
    },
		passportNumber: {
			allowNull: true,
			type: DataTypes.STRING(10),
			field: 'passport_number',
    },
		passportProvider: {
			allowNull: true,
			type: DataTypes.STRING(100),
			field: 'passport_provider',
    },
		passportDate: {
			allowNull: true,
			type: DataTypes.DATE,
			field: 'passport_date',
    },
    birthday: {
			allowNull: true,
			type: DataTypes.DATE,
    },
    citizenship: {
			allowNull: true,
			type: DataTypes.STRING(50),
    },
    finishedEducationId: {
			allowNull: true,
			type: DataTypes.INTEGER,
			field: 'finished_education_id',
    },
    diseases: {
			allowNull: true,
			type: DataTypes.STRING(255),
    },
    peGroup: {
			allowNull: true,
			type: DataTypes.STRING(20),
			field: 'pe_group',
    },
    individualInfo: {
			allowNull: true,
			type: DataTypes.TEXT,
			field: 'individual_info',
		},
		isBrsm: {
			allowNull: true,
			type: DataTypes.BOOLEAN,
			field: 'is_brsm',
		},
    firstParentName: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent1_name',
    },
    firstParentWork: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent1_work',
    },
    firstParentAddress: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent1_address',
    },
    firstParentPhone: {
			allowNull: true,
			type: DataTypes.STRING(50),
			field: 'parent1_phone',
		},
		secondParentName: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent2_name',
    },
    secondParentWork: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent2_work',
    },
    secondParentAddress: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'parent2_address',
    },
    secondParentPhone: {
			allowNull: true,
			type: DataTypes.STRING(50),
			field: 'parent2_phone',
    },
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'StudentInfo',
		tableName: 'students_info',
		name: {
		  singular: 'StudentInfo',
		  plural: 'StudentsInfo',
		},
	});

	StudentInfo.associate = (models) => {

		StudentInfo.belongsTo(models.Student, {
			foreignKey: 'studentId',
			as: 'student',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});
		
		StudentInfo.belongsTo(models.City, {
			foreignKey: 'cityId',
			as: 'city',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});
		
		StudentInfo.belongsTo(models.FinishedEducation, {
			foreignKey: 'finishedEducationId',
			as: 'finishedEducation',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

	};

	return StudentInfo;
};