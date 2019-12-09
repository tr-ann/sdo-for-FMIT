import AcademicRankRepository from '../repositories/AcademicRankRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class AcademicRankService {

    async create(academicRank) {
        return await AcademicRankRepository.create(academicRank)
    }

    async findById(id) {

        let academicRank = await AcademicRankRepository.readById(id)

        if (!academicRank) {
            throw new NotFound(`Academic rank not found`)
        }

        return academicRank
    }

    async update(id, academicRank) {

        let oldAcademicRank = AcademicRankRepository.readById(id)

        if(!oldAcademicRank) {
            throw new NotFound(`Academic rank not found`)
        }

        return await AcademicRankRepository.update(id, academicRank)
    }

    async destroy(id) {

        let oldAcademicRank = AcademicRankRepository.readById(id)

        if(!oldAcademicRank) {
            throw new NotFound(`Academic rank not found`)
        }

        await AcademicRankRepository.destroy(id)
    }
}

export default new AcademicRankService()