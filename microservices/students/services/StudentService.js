import StudentRepository from '../repositories/StudentRepository'
import NotFound from '../../../core/errors/4xx/notFound'

export default class StudentService {

    _repository = new StudentRepository()

    async list() {
        return await this._repository.readAll()
    }

    async create(student) {
        return await this._repository.create(student)
    }

    async findById(id) {
        let student = await this._repository.readById(id)
        if (!student) {
            throw new NotFound(`${objectName} not found`)
        }
        return student
    }

    async update(id, student) {
        return await this._repository.update(id, student)
    }

    async destroy(id) {
        let student = await this._repository.readById(id)
        if (!student) {
            throw new NotFound(`${objectName} not found`)
        }
        await this._repository.delete(student)
    }
};