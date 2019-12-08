import UserRepository from '../repositories/UserRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class UserService {

    async create(user) {
        let nUser = await UserRepository.create(user)
        delete nUser.password

        return nUser
    }

    async readAll() {
        let users = await UserRepository.readAll()
        console.log(users)
        return users
    }

    async readById(id) {

        let user = await UserRepository.readById(id)

        if (!user) {
            throw new NotFound('User not found')
        }

        delete user.dataValues.password
        delete user._previousDataValues.password
        
        return user
    }

    async update(id, user) {

        let oldUser = await UserRepository.readById(id)
        
        if (!oldUser) {
            throw new NotFound('User not found')
        }

        return await UserRepository.update(id, user)
    }

    async destroy(id) {

        let user = await UserRepository.readById(id)
        
        if (!user) {
            throw new NotFound('User not found')
        }
        
        return await UserRepository.destroy(id)
    }

    async get(options) {        
        return await UserRepository.get(options)
    }

    async getAll(options) {        
        return await UserRepository.getAll(options)
        
    }
}

export default new UserService()