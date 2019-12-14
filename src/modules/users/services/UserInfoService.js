import UserInfoRepository from '../repositories/UserInfoRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class UserInfoService {

    async create(userInfo) {
        return await UserInfoRepository.create(userInfo)
    }

    async readAll() {
        return await UserInfoRepository.readAll()
    }

    async readById(id) {

        let userInfo = await UserInfoRepository.readById(id)

        if (!userInfo) {
            throw new NotFound('User info not found')
        }

        return userInfo
    }

    async update(user_id, userInfo) {

        let oldUserInfo = await UserInfoRepository.readById(user_id)
        
        if (!oldUserInfo) {
            throw new NotFound('User info not found')
        }

        return await UserInfoRepository.update(user_id, userInfo)
    }

    async get(params) {
        return  await UserInfoRepository.get(params)
    }

    async destroy(id) {

        let userInfo = await UserInfoRepository.readById(id)
        
        if (!userInfo) {
            throw new NotFound('User info not found')
        }
        
        return await UserInfoRepository.destroy(id)
    }
}

export default new UserInfoService()