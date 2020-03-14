const errorsInfo = require('../../../constants/errorsInfo');

/**
 * Client access to the requested URL is denied for some reason.
 */
module.exports = class Forbidden extends Error {
  
  constructor(message = errorsInfo.ERR_403_MESSAGE) {
    super(message);
    super.name = errorsInfo.ERR_403_NAME;
    this.status = 403;
  }
};