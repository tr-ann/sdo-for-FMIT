const StudentInfoRepository = require('../repositories/StudentInfoRepository');

class StudentInfoService {

	async create(studentInfo, options) {
		return await StudentInfoRepository.create(studentInfo, options);
	}

	async update(id, studentInfo) {
		await this._updateGeneralInfo(id, studentInfo);
		await this._updatePassportInfo(id, studentInfo);
		await this._updateParentsInfo(id, studentInfo);
	}

	async destroy(id, options) {
		return await StudentInfoRepository.destroy(id, options);
	}
	
	async _updateParentsInfo(id, parentsData) {
		return await StudentInfoRepository.update(id, {
				firstParentName: parentsData.firstParentName,
				firstParentWork: parentsData.firstParentWork,
				firstParentAddress: parentsData.firstParentAddress,
				firstParentPhone: parentsData.firstParentPhone,
				secondParentName: parentsData.secondParentName,
				secondParentWork: parentsData.secondParentWork,
				secondParentAddress: parentsData.secondParentAddress,
				secondParentPhone: parentsData.secondParentPhone,
			});
	}

	async _updateGeneralInfo(id, data) {
		return await StudentInfoRepository.update(id, {
			cityId: data.cityId,
			address: data.address,
			sex: data.sex,
			birthday: data.birthday,
			finishedEducationId: data.finishedEducationId,
			diseases: data.diseases,
			peGroup: data.peGroup,
			individualInfo: data.individualInfo,
		});
	}

	async _updatePassportInfo(id, data) {
		return await StudentInfoRepository.update(id, {
			passportNumber: data.passportNumber,	// ???
			passportProvider: data.passportProvider,	// ???
			passportDate: data.passportDate,
			citizenship: data.citizenship,
			isBrsm: data.isBrsm,
		});
	}
  
}

module.exports = new StudentInfoService();