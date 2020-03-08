const InfoFacultyService = require('../services/InfoFacultyService');
const helpers = require('../../../helpers');

class InfoFacultyController {

  async create(req, res, next) {
      
    let infoFaculty = await InfoFacultyService.create({
      facultyId: req.body.facultyId,
      description: req.body.description,
      phoneNumber:req.body.phoneNumber,
    });
    
    res
      .status(201)
      .json(
        helpers.ResponseFormat.build(
          infoFaculty,
          "InfoFaculty created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let infoFacultys = await InfoFacultyService.readAll();
    
    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          infoFacultys,
          "InfoFacultys read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let infoFaculty = await InfoFacultyService.readById(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          infoFaculty,
          "InfoFaculty read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let infoFaculty = await InfoFacultyService.update(
      req.params.id,
      {
        description: req.body.description,
        phoneNumber:req.body.phoneNumber,
      }
    );

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          infoFaculty,
          "InfoFaculty updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
    
    await InfoFacultyService.destroy(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          {},
          "InfoFaculty deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new InfoFacultyController();