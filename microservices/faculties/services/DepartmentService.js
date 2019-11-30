import DepartmentRepository from '../repositories/DepartmentRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class DepartmentService {

    _repository = new DepartmentRepository()

    async create(department) {
        return await this._repository.create(department)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let department = await this._repository.readById(id)

        if (!department) {
            throw new NotFound(`Department not found`)
        }

        return department
    }

    async update(id, department) {

        let department = await this._repository.readById(id)
        
        if (!department) {
            throw new NotFound(`Department not found`)
        }

        return await this._repository.update(department)
    }

    async destroy(id) {

        let department = await this._repository.readById(id)
        
        if (!department) {
            throw new NotFound(`Department not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new DepartmentService()