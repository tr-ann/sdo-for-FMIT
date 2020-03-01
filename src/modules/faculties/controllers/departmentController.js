const DepartmentService = require('../services/DepartmentService');
const helpers = require('../../../helpers');

class DepartmentController {

  async create(req, res, next) {
     
    let department = await DepartmentService.create({
      name: req.body.name,
      facultyId: req.body.facultyId,
      ownerId: req.body.ownerId,
      phone: req.body.phone,
      lectureRoomId: req.body.lectureRoomId,
    });
    
    
    res
      .status(201)
      .json(
        helpers.ResponseFormat.build(
          department,
          "Department created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let departments = await DepartmentService.readAll();
    
    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          departments,
          "Departments read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let department = await DepartmentService.readById(req.params.id);

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          department,
          "Department read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
    
    let department = await DepartmentService.update(
      req.params.id,
      {
        name: req.body.name,
        facultyId: req.body.facultyId,
        ownerId: req.body.ownerId,
        phone: req.body.phone,
        lectureRoomId: req.body.lectureRoomId,
      }
    );

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          department,
          "Department updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await DepartmentService.destroy(req.params.id)

    res
      .status(200)
      .json(
        helpers.ResponseFormat.build(
          {},
          "Department deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new DepartmentController();