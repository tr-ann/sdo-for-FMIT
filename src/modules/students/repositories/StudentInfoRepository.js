const db = require('../../../dbModels');

class StudentInfoRepository {

	async create(studentInfo, options = {}) {
		return await db.StudentInfo.create(studentInfo, options)
	}

	async update(id, studentInfo, options = {}) {
		Object.assign(options, { where: { id: id }});

		return await db.StudentInfo.update(studentInfo, options);
	}

	async destroy(id, options = {}) {
		Object.assign(options, { where: { id: id }});

		return await db.StudentInfo.destroy(options);
	}
}

module.exports = new StudentInfoRepository()