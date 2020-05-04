const db = require('../../../dbModels');

class TimeSheetRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll(pagination) {
    return await db.TimeSheet.findAll({
      attributes: [
        'id', 'kind', 'timeSheet', 'lecturesNumber', 'practicalsNumber', 'laboratoryWorksNumber',
        'reviewWorksNumber', 'controlIndependentWork', 'reviewWorks', 'currentConsultations',
        'individualConsultations', 'examinationConsultations', 'exam', 'credit', 'trainingPractice',
        'productionPractice', 'courseWork', 'graduateWork', 'masters', 'stateExaminationBoard',
        'studentsNumber', 'thread', 'groupsNumber', 'subgroupsNumber'
      ],
      include: [
        {
          model: db.Discipline,
          as: 'discipline',
          attributes: [ 'id', 'subject', 'course', 'semester', 'form' ]
        },
        {
          model: db.Staff,
          as: 'staff',
          include: [{
            model: db.Teacher,
            as: 'teacher',
            attributes: [ 'id', 'shortName' ]
          }]
        }
      ],
			limit: pagination.limit,
			offset: pagination.offset
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of timeSheet that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.TimeSheet.findByPk(id, {
      attributes: [
        'id', 'kind', 'timeSheet', 'lecturesNumber', 'practicalsNumber', 'laboratoryWorksNumber',
        'reviewWorksNumber', 'controlIndependentWork', 'reviewWorks', 'currentConsultations',
        'individualConsultations', 'examinationConsultations', 'exam', 'credit', 'trainingPractice',
        'productionPractice', 'courseWork', 'graduateWork', 'masters', 'stateExaminationBoard',
        'studentsNumber', 'thread', 'groupsNumber', 'subgroupsNumber'
      ],
      include: [
        {
          model: db.Discipline,
          as: 'discipline',
          attributes: [ 'id', 'subject', 'course', 'semester', 'form' ]
        },
        {
          model: db.Staff,
          as: 'staff',
          include: [{
            model: db.Teacher,
            as: 'teacher',
            attributes: [ 'id', 'fullName' ]
          }]
        }
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} timeSheet - body of timeSheet that will be created
   * @return {Promise} promise with result of create
   */
  async create(timeSheet) {
    return await db.TimeSheet.create(timeSheet);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of timeSheet that will be updated
   * @param {Object} timeSheet - body of timeSheet that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, timeSheet) {
    return await db.TimeSheet.update(timeSheet, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of timeSheet that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.TimeSheet.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.TimeSheet.findAll(options);
  }
}

module.exports = new TimeSheetRepository();