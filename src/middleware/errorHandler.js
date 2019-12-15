import ResponseFormat from '../helpers/ResponseFormat'

export default function(err, req, res, next) {
    console.log(err.stack)

    switch (err.name) {
        case 'Unauthorized':
        case 'Gone':
        case 'RetryWith':
        case 'NotFound':
        case 'BadRequest':
        case 'InternalServer':
        case 'NotImplemented':
            return res.render("error", {currentUser: req.user, error: err})
            // return res.status(err.status).json(
            //     ResponseFormat.error(
            //         err,
            //         err.message,
            //         err.status,
            //         'failed'
            //     )
            // )
        default:
            err.status = 500
            return res.render("error", {currentUser: req.user, error: err})
            // return res.status(500).json(
            //     ResponseFormat.error(
            //         err,
            //         'unexpected error',
            //         500,
            //         'failed'
            //     )
            // )
    }
}