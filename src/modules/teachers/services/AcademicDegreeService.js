import AcademicDegreeRepository from '../repositories/AcademicDegreeRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class AcademicDegreeService {

    async create(academicDegree) {
        return await AcademicDegreeRepository.create(academicDegree)
    }

    async findById(id) {

        let academicDegree = await AcademicDegreeRepository.readById(id)

        if (!academicDegree) {
            throw new NotFound(`Academic degree not found`)
        }

        return academicDegree
    }

    async update(id, academicDegree) {

        let oldAcademicDegree = AcademicDegreeRepository.readById(id)

        if(!oldAcademicDegree) {
            throw new NotFound(`Academic degree not found`)
        }

        return await AcademicDegreeRepository.update(id, academicDegree)
    }

    async destroy(id) {

        let oldAcademicDegree = AcademicDegreeRepository.readById(id)

        if(!oldAcademicDegree) {
            throw new NotFound(`Academic degree not found`)
        }

        await AcademicDegreeRepository.destroy(id)
    }
}

export default new AcademicDegreeService()