const FacultyService = require('../services/FacultyService');
const InfoFacultyService = require('../services/InfoFacultyService');
const { responseFormat } = require('../../../helpers');

class FacultyController {

  async create(req, res, next) {
      
    let faculty = await FacultyService.create({
      name: req.body.name,
      shortName: req.body.shortName,
    });
    
    await InfoFacultyService.create({
      facultyId: faculty.id,
      description: req.body.description,
      phoneNumber: req.body.phoneNumber,
    });

    res
      .status(201)
      .json(
        responseFormat.build(
          faculty,
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
        name: req.body.name,
        shortName: req.body.shortName,
      }
    );
    
    await InfoFacultyService.update(
      req.params.id,
      {
        facultyId: req.params.id,
        description: req.body.description,
        phoneNumber: req.body.phoneNumber 
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