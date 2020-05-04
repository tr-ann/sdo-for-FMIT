const DisciplineService = require('../services/DisciplineService');
const { responseFormat } = require('../../../helpers');

class DisciplineController {

  async create(req, res, next) {
      
    let discipline = await DisciplineService.create({
      subject: req.body.subject,
      course: req.body.course,
      semester: req.body.semester,
      form: req.body.form,
      timeSheet: req.body.timeSheet,
      eng :req.body.eng,
      specialtyId: req.body.specialtyId
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          discipline,
          "Discipline created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let disciplines = await DisciplineService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          disciplines,
          "Disciplines read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let discipline = await DisciplineService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          discipline,
          "Discipline read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let discipline = await DisciplineService.update(
      req.params.id,
      {
        subject: req.body.subject,
        course: req.body.course,
        semester: req.body.semester,
        form: req.body.form,
        timeSheet: req.body.timeSheet,
        eng :req.body.eng,
        specialtyId: req.body.specialtyId
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          discipline,
          "Discipline updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await DisciplineService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Discipline deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new DisciplineController();