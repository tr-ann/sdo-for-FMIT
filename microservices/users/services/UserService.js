import UserRepository from '../repositories/UserRepository'
import UserInfoRepository from '../repositories/UserInfoRepository'

export default class UserService {

    _userRepository = new UserRepository()
    _userInfoRepository = new UserInfoRepository()

    async list() {
        return await this._userRepository.readAll()
    }

    async create(user) {
        return await this._userRepository.create(user)
    }

    async findById(id) {
        let user = await this._userRepository.readById(id)
        if (!user) {
            throw new NotFound(`${objectName} not found`)
        }
        return user
    }

    async update(user) {
        return await this._userRepository.update(user)
    }

    async destroy(id) {
        await this._userRepository.destroy(id)
    }
};