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

  validate({ params, query, body, options } = {}) {

    let paramsSchema = this._mergeSchemas(params);
    let querySchema = this._mergeSchemas(query);
    let bodySchema = this._mergeSchemas(body);

    return async (req, res, next) => {

      try {
        
        if (params) {
          await Joi.object(paramsSchema).validateAsync(req.params, options);
        }
  
        if (query) {
          await Joi.object(querySchema).validateAsync(req.query, options);
        }
      
        if (body) {
          await Joi.object(bodySchema).validateAsync(req.body, options);
        }

        next();
      }
      catch (error) {
        next(error);
      }
    }
  }
  
}

module.exports = new Validator();
