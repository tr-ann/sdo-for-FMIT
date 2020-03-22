const FacultyRepository = require('../repositories/FacultyRepository');
const { NotFound, BadRequest } = require('../../../classes/errors');
const { sequelize } = require('../../../sequelize');
const db = require('../../../dbModels');

class FacultyService {

  async create(faculty, options) {
    let existingFaculty = await FacultyRepository.get({ where: { name: faculty.name } });

    if(existingFaculty[0]) {
      throw new BadRequest('Such faculty already exists');
    }

    return await FacultyRepository.create(faculty, options);
  }

  async readAll() {
    return await FacultyRepository.readAll();
  }

  async readById(id) {

    let faculty = await FacultyRepository.readById(id);

    if (!faculty) {
      throw new NotFound(`Faculty not found`);
    }

    return faculty;
  }

  async update(id, data, options) {

    let facultyId = await sequelize.transaction( async (transaction) => {

      let existingFaculty = await FacultyRepository.readById(id);
      
      if (!existingFaculty) {
        throw new NotFound(`Faculty not found`);
      }

      await db.Faculty.update(data.faculty, { 
        where: { id: id },
        transaction: transaction
      });

      await db.InfoFaculty.update(data.infoFaculty, {
        where: { id: existingFaculty.infoFaculty.id },
        transaction: transaction
      });

      // СОСТАВИТЬ КРАСИВЫЙ ОТВЕТ
      
      return {
        id: id
      } 

    });

    //return await existingFaculty.update(faculty, options);
    return facultyId;
  }

  async destroy(id) {

    await sequelize.transaction( async (transaction) => {

      let faculty = await FacultyRepository.readById(id);
      
      if (!faculty) {
        throw new NotFound(`Faculty not found`)
      };

      let infoFaculty = await faculty.getInfoFaculty();
      await infoFaculty.destroy({ transaction: transaction });

      await faculty.destroy({ transaction: transaction });

    })
    
    return;
  }
}

module.exports = new FacultyService();