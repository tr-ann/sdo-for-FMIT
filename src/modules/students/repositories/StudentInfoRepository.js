const db = require('../../../dbModels');

class StudentInfoRepository {

	async create(studentInfo, options) {
		return await db.StudentInfo.create(studentInfo, options)
	}

	async update(id, studentInfo, options) {
		return await db.StudentInfo.update(studentInfo, { where: { id: id }, options })
	}

	async destroy(id, options) {
		return await db.StudentInfo.destroy({ where: { id: id }, options })
	}
}

module.exports = new StudentInfoRepository()