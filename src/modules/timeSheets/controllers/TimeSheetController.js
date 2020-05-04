const TimeSheetService = require('../services/TimeSheetService');
const { responseFormat } = require('../../../helpers');

class TimeSheetController {

  async create(req, res, next) {
      
    let timeSheet = await TimeSheetService.create({
      
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          timeSheet,
          "TimeSheet created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let timeSheets = await TimeSheetService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          timeSheets,
          "TimeSheets read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let timeSheet = await TimeSheetService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          timeSheet,
          "TimeSheet read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let timeSheet = await TimeSheetService.update(
      req.params.id,
      {
        
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          timeSheet,
          "TimeSheet updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await TimeSheetService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "TimeSheet deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new TimeSheetController();