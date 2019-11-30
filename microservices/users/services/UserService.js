import UserRepository from '../repositories/UserRepository'

class UserService {

    async list() {
        return await UserRepository.readAll()
    }

    async create(user) {
        let newUser = await UserRepository.create(user)
        delete newUser.password
        return newUser
    }

    async findById(id) {
        let user = await UserRepository.readById(id)
        if (!user) {
            throw new NotFound(`${objectName} not found`)
        }
        return user
    }

    async update(id, user) {
        let nUser = UserRepository.readById(id)
        if (!nUser) {
            throw new NotFound(`${objectName} not found`)
        }
        return await UserRepository.update(id, user)
    }

    async destroy(id) {
        await UserRepository.destroy(id)
    }
}

export default new UserService()