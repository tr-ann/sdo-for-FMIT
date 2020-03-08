const StudyModeService = require('../services/StudyModeService');
const helpers = require('../../../helpers');

class StudyModeController {

  async create(req, res, next) {
      
    let studyMode = await StudyModeService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        helpers.ResponseFormat.build(
          studyMode,
          "StudyMode created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let studyModes = await StudyModeService.readAll();
    
    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          studyModes,
          "StudyModes read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let studyMode = await StudyModeService.readById(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          studyMode,
          "StudyMode read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let studyMode = await StudyModeService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          studyMode,
          "StudyMode updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await StudyModeService.destroy(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          {},
          "StudyMode deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new StudyModeController();