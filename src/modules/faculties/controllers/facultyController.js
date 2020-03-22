const FacultyService = require('../services/FacultyService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const db = require('../../../dbModels');

class FacultyController {

  async create(req, res, next) {
      
    let facultyId = await sequelize.transaction( async (transaction) => {

      let faculty = await FacultyService.create({
        name: req.body.name,
        shortName: req.body.shortName,
        infoFaculty: {
          description: req.body.description,
          phone: req.body.phone,
        }
      }, {
        include: [{
          model: db.InfoFaculty,
          as: 'infoFaculty'
        }],
        transaction: transaction
      });

      return faculty.id;
    });

    res
      .status(201)
      .json(
        responseFormat.build(
          facultyId,
          "Faculty created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let faculties = await FacultyService.readAll();
          
    res
      .status(200)
      .json(
        responseFormat.build(
          faculties,
          "Faculties read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let faculty = await FacultyService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          faculty,
          "Faculty read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {

    let faculty = await FacultyService.update(
      req.params.id,
      {
        faculty: {
          name: req.body.name,
          shortName: req.body.shortName
        },
        infoFaculty: {
          description: req.body.description,
          phone: req.body.phone 
        }
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          faculty,
          "Faculty updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await FacultyService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Faculty deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new FacultyController();