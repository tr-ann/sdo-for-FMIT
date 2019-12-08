import DepartmentRepository from '../repositories/DepartmentRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class DepartmentService {

    async create(department) {
        return await DepartmentRepository.create(department)
    }

    async readAll() {
        return await DepartmentRepository.readAll()
    }

    async readById(id) {

        let department = await DepartmentRepository.readById(id)

        if (!department) {
            throw new NotFound(`Department not found`)
        }

        return department
    }

    async update(id, department) {

        let nDepartment = await DepartmentRepository.readById(id)
        
        if (!nDepartment) {
            throw new NotFound(`Department not found`)
        }

        return await DepartmentRepository.update(id, department)
    }

    async destroy(id) {

        let department = await DepartmentRepository.readById(id)
        
        if (!department) {
            throw new NotFound(`Department not found`)
        }
        
        return await DepartmentRepository.destroy(id)
    }
}

export default new DepartmentService()