import AcademicDegreeRepository from '../repositories/AcademicDegreeRepository'

class AcademicDegreeService {

    /*  ????  */
    async list() {
        return await AcademicDegreeRepository.readAll()
    }

    async create(academicDegree) {
        return await AcademicDegreeRepository.create(academicDegree)
    }

    /*  ????  */
    async findById(id) {
        let academicDegree = await AcademicDegreeRepository.readById(id)
        if (!academicDegree) {
            throw new NotFound(`${objectName} not found`)
        }
        return academicDegree
    }

    async update(id, academicDegree) {
        let nAcademicDegree = AcademicDegreeRepository.readById(id)
        if(!nAcademicDegree) {            
            throw new NotFound(`${objectName} not found`)
        }
        return await AcademicDegreeRepository.update(id, academicDegree)
    }

    async destroy(id) {
        return await AcademicDegreeRepository.destroy(id)
    }
}

export default new AcademicDegreeService()