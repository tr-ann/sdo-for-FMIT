const UserInfoRepository = require('../repositories/UserInfoRepository');
const { NotFound } = require('../../../classes/errors');

class UserInfoService {

	async create(userInfo, options) {

		return await UserInfoRepository.create(userInfo, options);
	}

	async readById(id) {

		let userInfo = await UserInfoRepository.readById(id);

		if (!userInfo) {
			throw new NotFound('User info not found');
		}

		return userInfo;
	}

	async update(userId, data, options) {

		let userInfo = await UserInfoRepository.readById(userId);

		if (!userInfo) {
			throw new NotFound('User info not found');
		}

		return await UserInfoRepository.update(userInfo.id, data, options);
	}

	async destroy(id) {

		let userInfo = await UserInfoRepository.readById(id);
		
		if (!userInfo) {
			throw new NotFound('User info not found');
		}
		
		return await UserInfoRepository.destroy(id);
	}
}

module.exports = new UserInfoService();