const ResourceService = require('../services/ResourceService');
const { responseFormat } = require('../../../helpers');

class ResourceController {

  async create(req, res, next) {
      
    let resource = await ResourceService.create({
      path: req.file.path,
      originalName: req.file.originalname,
      currentName: req.file.filename,
      size: req.file.size,
      mimeType: req.file.mimetype,
      description: req.description,
      attributes: req.attributes,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          resource,
          "Resource created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let resources = await ResourceService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          resources,
          "Resources read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let resource = await ResourceService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          resource,
          "Resource read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let resource = await ResourceService.update(
      req.params.id,
      {
        path: req.file.path,
        originalName: req.file.originalname,
        currentName: req.file.filename,
        size: req.file.size,
        mimeType: req.file.mimetype,
        description: req.description,
        attributes: req.attributes,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          resource,
          "Resource updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await ResourceService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Resource deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new ResourceController();