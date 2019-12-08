import ResponseFormat from '../helpers/ResponseFormat'

export default function(err, req, res, next) {
    //return res.status(err.status).json(err)

    switch (err.name) {
        case 'Unauthorized':
        case 'Gone':
        case 'RetryWith':
        case 'NotFound':
        case 'BadRequest':
        case 'InternalServer':
        case 'NotImplemented':
            return res.status(err.status).json(
                ResponseFormat.error(
                    err,
                    err.message,
                    err.status,
                    'failed'
                )
            )
        default:
            return res.status(500).json(
                ResponseFormat.error(
                    err,
                    'unexpected error',
                    500,
                    'failed'
                )
            )
    }
}