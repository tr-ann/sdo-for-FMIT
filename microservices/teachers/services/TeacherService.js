import TeacherRepository from '../repositories/TeacherRepository'

class TeacherService {

    async list() {
        return await TeacherRepository.readAll()
    }

    async create(teacher) {
        return await TeacherRepository.create(teacher)
    }

    async findById(id) {
        let teacher = await TeacherRepository.readById(id)
        if (!teacher) {
            throw new NotFound(`${objectName} not found`)
        }
        return teacher
    }

    async update(id, teacher) {
        return await TeacherRepository.update(id, teacher)
    }

    async destroy(id) {
        return await TeacherRepository.destroy(id)
    }

    async getInfo(id) {
        let teacher = await TeacherRepository.getInfo(id)
        if (!teacher) {
            throw new NotFound(`${objectName} not found`)
        }
        return teacher
    }
}

export default new TeacherService()