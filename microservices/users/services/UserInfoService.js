import UserInfoRepository from '../repositories/UserInfoRepository'

export default class UserInfoService {

    _repository = new UserInfoRepository()

    async list() {
        return await this._repository.readAll()
    }

    /*  ????  */
    async create(userInfo) {
        return await this._repository.create(userInfo)
    }

    async findById(id) {
        let userInfo = await this._repository.readById(id)
        if (!userInfo) {
            throw new NotFound(`${objectName} not found`)
        }
        return userInfo
    }

    async update(id, userInfo) {
        return await this._repository.update(id, userInfo)
    }

    async destroy(id) {
        await this._repository.destroy(id)
    }
};