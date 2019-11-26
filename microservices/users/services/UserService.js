import UserRepository from '../repositories/UserRepository'
import { hash } from 'bcrypt'

export default class UserService {

    _repository = new UserRepository()

    async list() {
        return await this._repository.readAll()
    }

    async create(user) {
        user.password = await hash(user.password)
        return await this._repository.create(user)
    }

    async findById(id) {
        let user = await this._repository.readById(id)
        if (!user) {
            throw new NotFound(`${objectName} not found`)
        }
        return user
    }

    async update(user) {
        return await this._repository.update(user)
    }

    async destroy(id) {
        let user = await this._repository.readById(id)
        if (!user) {
            throw new NotFound(`${objectName} not found`)
        }
        await this._repository.delete(user)
    }
};