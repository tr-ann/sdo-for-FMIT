import TeacherRepository from '../repositories/TeacherRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class TeacherService {

    async create(teacher) {
        return await TeacherRepository.create(teacher)
    }

    async findById(id) {

        let teacher = await TeacherRepository.readById(id)

        if (!teacher) {
            throw new NotFound(`Teacher not found`)
        }

        return teacher
    }

    async update(id, teacher) {

        let oldTeacher = TeacherRepository.readById(id)

        if(!oldTeacher) {
            throw new NotFound(`Teacher not found`)
        }

        return await TeacherRepository.update(id, teacher)
    }

    async destroy(id) {

        let oldTeacher = TeacherRepository.readById(id)

        if(!oldTeacher) {
            throw new NotFound(`Teacher not found`)
        }

        await TeacherRepository.destroy(id)
    }
}

export default new TeacherService()