const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class TimeSheet extends Model {};

  TimeSheet.init({
    kind: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    timeSheet: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'time_sheet'
    },
    lecturesNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'lectures_number'
    },
    practicalsNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'practicals_number'
    },
    laboratoryWorksNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'labaratory_works_number'
    },
    reviewWorksNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'review_works_number'
    },
    controlIndependentWork: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'control_independent_work'
    },
    reviewWorks: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'review_works'
    },
    currentConsultations: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'current_consultations'
    },
    individualConsultations: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'individual_consultations'
    },
    examinationConsultations: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'examination_consultations'
    },
    exam: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    credit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    trainingPractice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'training_practice'
    },
    productionPractice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'production_practice'
    },
    courseWork: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'course_work'
    },
    graduateWork: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'graduate_work'
    },
    masters: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stateExaminationBoard: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'state_examination_board'
    },
    studentsNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'students_number'
    },
    thread: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupsNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'groups_number'
    },
    subgroupsNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'subgroups_number'
    },
    
    disciplineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'discipline_id'
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'staff_id'
    }
  }, {
    sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'TimeSheet',
		tableName: 'time_sheet',
		name: {
		  singular: 'TimeSheet',
		  plural: 'TimeSheets',
		},
  });

  TimeSheet.associate = (models) => {

    TimeSheet.belongsTo(models.Staff, {
      foreignKey: 'staffId',
      as: 'timeSheet',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });
    TimeSheet.belongsTo(models.Discipline, {
      foreignKey: 'disciplineId',
      as: 'timeSheet',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

  };

  return TimeSheet;
};