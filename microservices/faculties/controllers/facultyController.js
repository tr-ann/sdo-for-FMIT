const faculty = require('../db/models').Faculty;
const comment = require('../db/models').Comment;
const ResponseFormat = require('../core').ResponseFormat;
module.exports = {
    create(req, res) {
        return faculty
        .create({
            name: req.body.name,
            short_name: req.body.short_name,
        })
        .then(faculty => res.status(201).json(ResponseFormat.build(
            faculty,
            "Faculty Create Successfully",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormat.error(
            error,
            "Something went wrong when create Faculties",
            "error"
        )))
    },
    list(req, res) {
        return faculty
        .all()
        .then(facultys => res.status(200).json(ResponseFormat.build(
            facultys,
            "Faculty Information Reterive successfully",
            200,
            "success"
        )))
        .catch(error => res.status(400).send(ResponseFormat.build(
            error,
            "Somthing went wrong when Reterieve Information",
            400,
            "error"
        )));
    },
    /*listWithComment(req, res) {
        return faculty
        .findAll({
            include: [{
                model: comment,
                as: 'comments'
            }],
            order:[
             ['createdAt', 'DESC'],
             [{model: comment, as:'comments'}, 'createdAt', 'ASC'],
            ],
        })
        .then((facultys) => res.status(200).json(
            ResponseFormat.build(
                facultys,
                "all faculty information are reterive successfully",
                200,
                "success"
            )
        ))
        .catch((error) => res.status(500).json(
            ResponseFormat.error(
                error,
                "somthing went wrong when reterieve the data",
                500,
                "error"
            )
        ))
    },*/
    getFacultyDetails (req, res) {
        return faculty
        .findById(req.params.facultyId, {
            include: [{
                model: comment,
                as: 'comments'
            }],
        })
        .then(facultys => {

            if(!facultys) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "No faculty found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    facultys,
                    "Faculty information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the faculty details",
                500,
                "error"
            )
        ));
    },
    update(req, res) {
        return faculty
        .findById(req.params.facultyId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "Faculty not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .update({
                firstName: req.body.name || usr.name,
                lastName: req.body.short_name || usr.short_name
            })
            .then(() => res.status(200).json(
                ResponseFormat.build(
                    usr,
                    "faculty Update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the faculty",
                    500,
                    "error"
                )
            ));
        });
    },
    destroy (req, res) {
        return faculty
        .findById(req.params.facultyId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "faculty not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .destroy()
            .then(() => res.status(200).json(
               ResponseFormat.build(
                 {},
                 "faculty deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the faculty",
                    500,
                    "error"
                )
            ));
        });
    }
}