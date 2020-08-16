const StudentInfoRepository = require('../repositories/StudentInfoRepository');

class StudentInfoService {

	async create(studentInfo, options) {
		return await StudentInfoRepository.create(studentInfo, options);
	}

	async update(id, studentInfo) {
		return await StudentInfoRepository.update(id, studentInfo);
	}

	async destroy(id) {
		return await StudentInfoRepository.destroy(id);
  }
  
}

module.exports = new StudentInfoService();