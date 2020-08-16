const Joi = require('@hapi/joi');

class Validator {

  _mergeSchemas(schemas) {
  
    let schema = {};
    
    if (schemas) {
      if (Array.isArray(schemas)) {
        for (let subschema of schemas) {
          Object.assign(schema, subschema);
        }
      }
      else {
        schema = schemas;
      }
    }
  
    return schema;
  }

  validate({ params, query, body } = {}) {

    let paramsSchema = this._mergeSchemas(params);
    let querySchema = this._mergeSchemas(query);
    let bodySchema = this._mergeSchemas(body);

    return async (req, res, next) => {

      try {
        
        if (params) {
          await Joi.object(paramsSchema).validateAsync(req.params);
        }
  
        if (query) {
          await Joi.object(querySchema).validateAsync(req.query);
        }
      
        if (body) {
          await Joi.object(bodySchema).validateAsync(req.body);
        }

        next();
      }
      catch (error) {
        next(error);
      }
    }
  }
  
  /*
  validate(schemas) {

    let objectSchema = this._mergeSchemas(schemas);

    return async (req, res, next) => {

      try {

        let object = {};
        Object.assign(object, req.query || {}, req.params || {}, req.body || {});

        await Joi.object(objectSchema).validateAsync(object);

        next();
      }
      catch (error) {
        next(error);
      }
    }
  }
  */
}

module.exports = new Validator();