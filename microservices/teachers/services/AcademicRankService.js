import AcademicRankRepository from '../repositories/AcademicRankRepository'

export default class AcademicRankService {

    _repository = new AcademicRankRepository()

    /*  ????  */
    async list() {
        return await this._repository.readAll()
    }

    async create(academicRank) {
        return await this._repository.create(academicRank)
    }

    /*  ????  */
    async findById(id) {
        let academicRank = await this._repository.readById(id)
        if (!academicRank) {
            throw new NotFound(`${objectName} not found`)
        }
        return academicRank
    }

    async update(id, academicRank) {
        return await this._repository.update(id, academicRank)
    }

    async destroy(id) {
        return await this._repository.destroy(id)
    }

};