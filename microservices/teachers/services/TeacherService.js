import TeacherRepository from '../repositories/TeacherRepository'

export default class TeacherService {

    _repository = new TeacherRepository()

    async list() {
        return await this._repository.readAll()
    }

    async create(teacher) {
        return await this._repository.create(teacher)
    }

    async findById(id) {
        let teacher = await this._repository.readById(id)
        if (!teacher) {
            throw new NotFound(`${objectName} not found`)
        }
        return teacher
    }

    async update(id, teacher) {
        return await this._repository.update(id, teacher)
    }

    async destroy(id) {
        return await this._repository.destroy(id)
    }

    async getInfo(id) {
        let teacher = await this._repository.getInfo(id)
        if (!teacher) {
            throw new NotFound(`${objectName} not found`)
        }
        return teacher
    }
};