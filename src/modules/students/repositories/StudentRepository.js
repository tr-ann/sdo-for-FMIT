const db = require('../../../dbModels')

class StudentRepository {

	async create(student, options = {}) {
		return await db.Student.create(student, options);
	}

	async readById(id) {   
		return await db.Student.findByPk(id, {
			attributes: [ 'id', 'userId', 'fullName', 'recordBook' ],
			include: [
				{
					model: db.StudentInfo,
					attributes: [ 'id', 'address', 'sex', 'passportNumber',
						'passportProvider', 'passportDate', 'birthday', 'citizenship',
						'diseases', 'peGroup', 'individualInfo', 'isBrsm' ],
					include: [
						{
							model: db.City,
							attributes: [ 'id', 'name' ],
							as: 'city',
						},
						{
							model: db.FinishedEducation,
							attributes: [ 'id', 'name' ],
							as: 'finishedEducation',
						},
					],
					as: 'studentInfo',
				},
				{
					model: db.Group,
					attributes: [ 'number' ],
					as: 'group'
				}]
		});
	}

	async readAll(pagination) {
		return await db.Student.findAll({
			attributes: [ 'id', 'fullName', 'recordBook', 'userId' ],
			include: [
				{
					model: db.Group,
					attributes: [ 'id', 'number' ],
					as: 'group'
				},
			],
			limit: pagination.limit,
      offset: pagination.offset
		});
	}

	async update(id, student, options = {}) {
		Object.assign(options, { where: { id: id }});

		return await db.Student.update(student, options);
	}

	async destroy(id, options = {}) {
		Object.assign(options, { where: { id: id }});

		return await db.Student.destroy(options);
	}

	async get(options) {
		return await db.Student.findAll(options);
	}
}

module.exports = new StudentRepository()