const StaffService = require('../services/StaffService');
const { responseFormat } = require('../../../helpers');

class StaffController {

  async create(req, res, next) {
      
    let staff = await StaffService.create({
      rate: req.body.rate,
      min: req.body.min,
      max: req.body.max,
      note: req.body.note,
      teacherId: req.body.teacherId
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          staff,
          "Staff created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let staffs = await StaffService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          staffs,
          "Staffs read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let staff = await StaffService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          staff,
          "Staff read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let staff = await StaffService.update(
      req.params.id,
      {
        rate: req.body.rate,
        min: req.body.min,
        max: req.body.max,
        note: req.body.note,
        teacherId: req.body.teacherId
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          staff,
          "Staff updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await StaffService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Staff deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new StaffController();