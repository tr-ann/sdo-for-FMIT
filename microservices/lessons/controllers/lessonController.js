const lesson = require('./models/Lesson');
const ResponseFormat = require('../core').ResponseFormat;
module.exports = {
    create(req, res) {
        return lesson
        .create({
            group_id: req.body.group_id,
            subgroup_id: req.body.subgroup_id,
            teacher_id: req.body.teacher_id,
            type_id: req.body.type_id,
            room_id: req.body.room_id,
            discipline_id: req.body.discipline_id,
            lesson_number_id: req.body.lesson_number_id,
            week_day: req.body.week_day,
        })
        .then(lsn => res.status(201).json(ResponseFormat.build(
            lsn,
            "Lesson Create Successfully",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormat.error(
            error,
            "Something went wrong when create Users",
            "error"
        )))
    },
    readAll(req, res) {
        return lesson
        .all()
        .then(lessons => res.status(200).json(ResponseFormat.build(
            lessons,
            "Lesson Information Reterive successfully",
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
    readById(req, res) {
        return lesson
        .findByPk(req.params.id, {
            include: [{ model: group, as: 'groups' }],
            include: [{ model: subgroup, as: 'subgroups' }],
            include: [{ model: teacher, as: 'teachers' }],
            include: [{ model: lesson_type, as: 'lesson_types' }],
            include: [{ model: lecture_room, as: 'lecture_rooms' }],
            include: [{ model: discipline, as: 'disciplines' }],
            include: [{ model: lesson_number, as: 'lesson_numbers' }],
        })
        .then(lessons => {

            if(!lessons) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "Lesson not found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    lessons,
                    "Lesson information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the user details",
                500,
                "error"
            )
        ));
    },
    update(req, res) {
        return lesson
        .findById(req.params.id)
        .then(lsn => {
            if(!lsn) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "Lesson not found",
                        404,
                        "error"
                    )
                );
            }

            return lsn
            .update({
                group_id: req.body.group_id || lsn.group_id,
                subgroup_id: req.body.subgroup_id || lsn.subgroup_id,
                teacher_id: req.body.teacher_id || lsn.teacher_id,
                type_id: req.body.type_id || lsn.type_id,
                room_id: req.body.room_id || lsn.room_id,
                discipline_id: req.body.discipline_id || lsn.discipline_id,
                lesson_number_id: req.body.lesson_number_id || lsn.lesson_number_id,
                week_day: req.body.week_day || lsn.week_day,
            })
            .then(() => res.status(200).json(
                ResponseFormat.build(
                    lsn,
                    "Lesson update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the user",
                    500,
                    "error"
                )
            ));
        });
    },
    destroy(req, res) {
        return user
        .findById(req.params.userId)
        .then(lsn => {
            if(!lsn) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "Lesson not found",
                        404,
                        "error"
                    )
                );
            }

            return lsn
            .destroy()
            .then(() => res.status(200).json(
               ResponseFormat.build(
                 {},
                 "Lesson deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the user",
                    500,
                    "error"
                )
            ));
        });
    }
}