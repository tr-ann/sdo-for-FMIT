const GroupService = require('../services/GroupService');
const helpers = require('../../../helpers');

class GroupController {

  async create(req, res, next) {
      
    let group = await GroupService.create({
      number: req.body.number,
      facultyId: req.body.facultyId,
      specialtyId: req.body.specialtyId,
      studyModeId:req.body.studyModeId,
    });
    
    res
      .status(201)
      .json(
        helpers.ResponseFormat.build(
          group,
          "Group created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let groups = await GroupService.readAll();
    
    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          groups,
          "Groups read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let group = await GroupService.readById(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          group,
          "Group read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
    
    let group = await GroupService.update(
      req.params.id,
      {
        number: req.body.number,
        facultyId: req.body.facultyId,
        specialtyId: req.body.specialtyId,
        studyModeId:req.body.studyModeId,
      }
    );

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          group,
          "Group updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
    
    await GroupService.destroy(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          {},
          "Group deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new GroupController();