import UserInfoRepository from '../repositories/UserInfoRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class UserInfoService {

    async readAll() {
        return await UserInfoRepository.readAll()
    }

    async create(userInfo) {
        return await UserInfoRepository.create(userInfo)
    }

    async findById(id) {
        let userInfo = await UserInfoRepository.readById(id)
        if (!userInfo) {
            throw new NotFound(`${objectName} not found`)
        }
        return userInfo
    }

    async update(id, userInfo) {
        let nUserInfo = UserInfoRepository.readById(id)
        if (!nUserInfo) {
            throw new NotFound(`${objectName} not found`)
        }
        return await UserInfoRepository.update(id, userInfo)
    }

    async destroy(id) {
        await UserInfoRepository.destroy(id)
    }
}

export default new UserInfoService()