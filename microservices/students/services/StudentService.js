import StudentRepository from '../repositories/StudentRepository'
import NotFound from '../../../core/errors/4xx/notFound'

class StudentService {

    async list() {
        return await StudentRepository.readAll()
    }

    async create(student) {
        return await StudentRepository.create(student)
    }

    async findById(id) {
        let student = await StudentRepository.readById(id)
        if (!student) {
            throw new NotFound(`${objectName} not found`)
        }
        return student
    }

    async update(id, student) {
        return await StudentRepository.update(id, student)
    }

    async destroy(id) {
        let student = await StudentRepository.readById(id)
        if (!student) {
            throw new NotFound(`${objectName} not found`)
        }
        await StudentRepository.delete(student)
    }
}

export default new StudentService()