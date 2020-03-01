const SubgroupService = require('../services/SubgroupService');
const helpers = require('../../../helpers');

class SubgroupController {

  async create(req, res, next) {
      
    let subgroup = await SubgroupService.create({
      name: req.body.name,
      groupId: req.body.groupId,
    });
    
    res
      .status(201)
      .json(
        helpers.ResponseFormat.build(
          subgroup,
          "Subgroup created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let subgroups = await SubgroupService.readAll();
          
    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          subgroups,
          "Subgroups read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let subgroup = await SubgroupService.readById(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          subgroup,
          "Subgroup read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let subgroup = await SubgroupService.update(
      req.params.id,
      {
        name: req.body.name,
        groupId: req.body.groupId,
      }
    );

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          subgroup,
          "Subgroup updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await SubgroupService.destroy(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          {},
          "Subgroup deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new SubgroupController();