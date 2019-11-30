import AcademicDegreeRepository from '../repositories/AcademicDegreeRepository'

export default class AcademicDegreeService {

    _repository = new AcademicDegreeRepository()

    /*  ????  */
    async list() {
        return await this._repository.readAll()
    }

    async create(academicDegree) {
        return await this._repository.create(academicDegree)
    }

    /*  ????  */
    async findById(id) {
        let academicDegree = await this._repository.readById(id)
        if (!academicDegree) {
            throw new NotFound(`${objectName} not found`)
        }
        return academicDegree
    }

    async update(id, academicDegree) {
        return await this._repository.update(id, academicDegree)
    }

    async destroy(id) {
        return await this._repository.destroy(id)
    }
};