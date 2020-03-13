const responseFormat = require('../helpers/responseFormat');
const errorsInfo = require('../constants/errorsInfo');

module.exports = (err, req, res, next) => {

  switch (err.name) {
    case errorsInfo.ERR_400_NAME:
    case errorsInfo.ERR_401_NAME:
    case errorsInfo.ERR_403_NAME:
    case errorsInfo.ERR_404_NAME:
    case errorsInfo.ERR_409_NAME:
    case errorsInfo.ERR_410_NAME:
    case errorsInfo.ERR_422_NAME:
    case errorsInfo.ERR_449_NAME:
    case errorsInfo.ERR_500_NAME:
    case errorsInfo.ERR_501_NAME:
      res
        .status(err.status)
        .json(
          responseFormat.error(
            {
              name: err.name,
            },
            err.message,
            err.status,
            'failed'
          )
        );
    default:
      res
        .status(500)
        .json(
          responseFormat.error(
            {
              name: err.name,
              message: err.message,
              stack: err.stack,
            },
            'unexpected error',
            500,
            'failed'
          )
        );
  }
};