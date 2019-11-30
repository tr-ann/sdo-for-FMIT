import AcademicRankRepository from '../repositories/AcademicRankRepository'

class AcademicRankService {

    /*  ????  */
    async list() {
        return await AcademicRankRepository.readAll()
    }

    async create(academicRank) {
        return await AcademicRankRepository.create(academicRank)
    }

    /*  ????  */
    async findById(id) {
        let academicRank = await AcademicRankRepository.readById(id)
        if (!academicRank) {
            throw new NotFound(`${objectName} not found`)
        }
        return academicRank
    }

    async update(id, academicRank) {
        return await AcademicRankRepository.update(id, academicRank)
    }

    async destroy(id) {
        return await AcademicRankRepository.destroy(id)
    }

}

export default new AcademicRankService()