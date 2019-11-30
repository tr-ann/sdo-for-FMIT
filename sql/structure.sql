/**
 * 1.  Нужно ли в таблице user для поля email параметр NOT NULL и UNIQUE.
 * 2.  Просмотреть структуру таблицы source.

 * 18. В старой БД не было информации об успеваемости, так что необходимо решить, в каком виде добавить эти данные:
 *     в виде таблицы exam_result и credit, или же создать отдельную таблицу accreditation, указывающую на конкретную
 *     сессию, а от нее сделать зависимые таблицы и для экзаменов, и для зачетов, а то, как в них будет храниться
 *     информация, уже обговорить позже. Пока реализован первый вариант с таблицами exam_result и credit.

 * 21. Нужно уточнить, как будет храниться информация о проведении и результатах защиты курсовых работ, дипломных работ и 
 *     о результатах практики (добавить поле оценка).
 */

/* Таблица `дисциплина` */
DROP DATABASE IF EXISTS `sdo_test`;
CREATE DATABASE `sdo_test` DEFAULT CHARACTER SET UTF8MB4;

USE `sdo_test`;

DROP TABLE IF EXISTS `disciplines`;
CREATE TABLE `disciplines` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(150)NOT NULL,
    `short_name`            VARCHAR(20) NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `номер занятия` */
DROP TABLE IF EXISTS `lesson_numbers`;
CREATE TABLE `lesson_numbers` (
    `id`                    SERIAL      PRIMARY KEY,
    `number`                INT    NOT NULL UNIQUE,
    `start_time_1`          TIME        NOT NULL,
    `end_time_1`            TIME        NOT NULL,
    `start_time_2`          TIME        NOT NULL,
    `end_time_2`            TIME        NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `тип помещения` */
DROP TABLE IF EXISTS `room_types`;
CREATE TABLE `room_types` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS `buildings`;
CREATE TABLE `buildings` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(200) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `аудитория` */
DROP TABLE IF EXISTS `lecture_rooms`;
CREATE TABLE `lecture_rooms` (
    `id`                    SERIAL      PRIMARY KEY,
    `number`                VARCHAR(5)  NOT NULL,
    `type_id`               INT    ,
    `building_id`           INT,
    `seats_count`           INT,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `тип занятия` */
DROP TABLE IF EXISTS `lesson_types`;
CREATE TABLE `lesson_types` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(30) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `должность` */
DROP TABLE IF EXISTS `positions`;
CREATE TABLE `positions` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `ученая степень` */
DROP TABLE IF EXISTS `academic_degrees` ;
CREATE TABLE `academic_degrees` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `ученое звание` */
DROP TABLE IF EXISTS `academic_ranks` ;
CREATE TABLE `academic_ranks` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `роль` */
DROP TABLE IF EXISTS `roles` ;
CREATE TABLE `roles` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(25) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `пользователь` */
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id`                    SERIAL      PRIMARY KEY,
    `login`                 VARCHAR(50) NOT NULL UNIQUE,
    `password`              VARCHAR(100)NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS `users_roles` ;
CREATE TABLE `users_roles` (
    `id`                    SERIAL      PRIMARY KEY,
    `user_id`               INT NOT NULL,
    `role_id`               INT NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `кафедра` */
DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(100)NOT NULL UNIQUE,
    `faculty_id`            INT NOT NULL,
    `owner_id`              INT         ,
    `phone`                 VARCHAR(30) ,
    `room_id`               INT,
    `deleted_date`          DATETIME      
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `телефон` */
DROP TABLE IF EXISTS `phones`;
CREATE TABLE `phones` (
    `id`                    SERIAL PRIMARY KEY,
    `user_id`               INT         ,
    `phone`                 VARCHAR(30),
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `ресурс` */
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources` (
    `id`                    SERIAL      PRIMARY KEY,
    `description`           TEXT        NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `информация о пользователе` */
DROP TABLE IF EXISTS `users_info`;
CREATE TABLE `users_info` (
    `user_id`               INT         PRIMARY KEY,
    `description`           TEXT,
    `birthday`              DATETIME        NOT NULL,
    `city`                  VARCHAR(30) NOT NULL,
    `address`               TEXT        NOT NULL,
    `photo_id`              INT         ,
    `deleted_date`          DATETIME         
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `преподаватель` */
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
    `id`                    INT         PRIMARY KEY,
    `full_name`             VARCHAR(150)NOT NULL,
    `short_name`            VARCHAR(50) NOT NULL,
    `department_id`         INT    ,
    `position_id`           INT    ,
    `academic_degree_id`    INT    ,
    `academic_rank_id`      INT    ,
    `deleted_date`          DATETIME    
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `факультет` */
DROP TABLE IF EXISTS `faculties`;
CREATE TABLE `faculties` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(100)NOT NULL UNIQUE,
    `short_name`            VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `информация о факультете` */
DROP TABLE IF EXISTS `info_faculties`;
CREATE TABLE `info_faculties` (
    `id`                    INT    PRIMARY KEY,
    `description`           TEXT        ,
    `phone_number`          VARCHAR(20) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `специальность` */
DROP TABLE IF EXISTS `specialties` ;
CREATE TABLE `specialties` (
    `id`                    SERIAL      PRIMARY KEY,
    `code`                  VARCHAR(20) NOT NULL UNIQUE,
    `name`                  VARCHAR(100) NOT NULL UNIQUE,
    `short_name`            VARCHAR(60) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `форма обучения` */
DROP TABLE IF EXISTS `study_modes` ;
CREATE TABLE `study_modes` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(45) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `группа` */
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
    `id`                    SERIAL      PRIMARY KEY,
    `number`                VARCHAR(4)  NOT NULL,
    `faculty_id`            INT    ,
    `specialty_id`          INT    ,
    `study_mode_id`         INT    ,
    `deleted_date`          DATETIME    
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `подгруппа` */
DROP TABLE IF EXISTS `subgroups`;
CREATE TABLE `subgroups` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(20) NOT NULL,
    `group_id`              INT         ,
    `deleted_date`          DATETIME         
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `подгруппа и студент` */
DROP TABLE IF EXISTS `subgroups_students`;
CREATE TABLE `subgroups_students` (
    `id`                    SERIAL      PRIMARY KEY,
    `student_id`            INT         ,
    `subgroup_id`           INT         ,
    `deleted_date`          DATETIME         
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `куратор` */
DROP TABLE IF EXISTS `curators`;
CREATE TABLE `curators` (
    `id`                    SERIAL      PRIMARY KEY,
    `group_id`              INT         ,
    `teacher_id`            INT         ,
    `deleted_date`          DATETIME         
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `занятие` */
DROP TABLE IF EXISTS `lessons` ;
CREATE TABLE `lessons` (
    `id`                    SERIAL      PRIMARY KEY,
    `group_id`              INT         ,
    `subgroup_id`           INT         ,
    `teacher_id`            INT         ,
    `type_id`               INT    ,
    `room_id`               INT    ,
    `discipline_id`         INT    ,
    `lesson_number_id`      INT    ,
    `week_day`              INT    NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `студент` */
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` ( 
    `id`                    INT             PRIMARY KEY,
    `full_name`             VARCHAR(300)    NOT NULL,
    `short_name`            VARCHAR(100)    NOT NULL,
    `group_id`              INT             ,
    `record_book`           VARCHAR(30)     NOT NULL,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

-- /* Таблица `результат экзамена` */
-- DROP TABLE IF EXISTS `exam_result`;
-- CREATE TABLE `exam_result` (
--     `student_id`            INT         REFERENCES `student`,
--     `discipline_id`         INT    REFERENCES `discipline`,
--     `semester`              INT    NOT NULL CHECK (`semester` > 0 AND `semester` < 11),
--     `exam_score`            INT    NOT NULL CHECK (`exam_score` > 0 AND `exam_score` < 11),
--     UNIQUE(`student_id`, `discipline_id`, `semester`)
-- ) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

-- /* Таблица `зачет` */
-- DROP TABLE IF EXISTS `credit`;
-- CREATE TABLE `credit` (
--     `student_id`            INT    REFERENCES `student`,
--     `discipline_id`         INT    REFERENCES `discipline`,
--     `semester`              INT    NOT NULL CHECK (`semester` > 0 AND `semester` < 11),
--     `credit`                BOOL        NOT NULL,
--     UNIQUE(`student_id`, `discipline_id`, `semester`)
-- ) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/******************************************************************************\
|****** Далее идет часть БД связанная с курсовыми и дипломными работами, ******|
|****** а также практикой студентов. Т.к. я не разбираюсь, какая может   ******|
|****** понадобиться в этих таблицах информация, то просто возьму за ос- ******|
|****** нову те таблицы, что у нас уже есть и совмещу это таблицами, что ******|
|****** найдены в интернете в рамках других курсовых работ.              ******|
\******************************************************************************/

/* Таблица `статус` */
DROP TABLE IF EXISTS `statuses`;
CREATE TABLE `statuses` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(12) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `заявка` */
DROP TABLE IF EXISTS `requests`;
CREATE TABLE `requests` (
    `id`                    SERIAL      PRIMARY KEY,
    `student_id`            INT         ,
    `teacher_id`            INT         ,
    `status_id`             INT    ,
    `topic`                 VARCHAR(50) NOT NULL,
    `name`                  VARCHAR(90) NOT NULL,
    `create_date`           DATETIME        DEFAULT (CURRENT_DATE),
    `update_date`           DATETIME    ,
    `description`           TEXT        ,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `курсовая работа` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS `term_papers`;
CREATE TABLE `term_papers` (
    `id`                    SERIAL      PRIMARY KEY,
    `student_id`            INT         ,
    `teacher_id`            INT         ,
    `status_id`             INT         ,
    `topic`                 VARCHAR(50) NOT NULL,
    `name`                  VARCHAR(90) NOT NULL,
    `description`           TEXT        ,
    `resource_id`           INT         ,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `дипломная работа` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS `graduation_papers`;
CREATE TABLE `graduation_papers` (
    `id`                    SERIAL      PRIMARY KEY,
    `student_id`            INT         ,
    `teacher_id`            INT         ,
    `status_id`             INT         ,
    `topic`                 VARCHAR(50) NOT NULL,
    `name`                  VARCHAR(90) NOT NULL,
    `description`           TEXT        ,
    `resource_id`           INT         ,
    `deleted_date`          DATETIME  
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `организация` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS `organizations`;
CREATE TABLE `organizations` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(90) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `виды практик` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS `practice_types`;
CREATE TABLE `practice_types` (
    `id`                    SERIAL      PRIMARY KEY,
    `name`                  VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

/* Таблица `практика` !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS `practices`;
CREATE TABLE `practices` (
    `id`                    SERIAL      PRIMARY KEY,
    `student_id`            INT         ,
    `organization_id`       INT    ,
    `status_id`             INT         ,
    `topic`                 VARCHAR(50) NOT NULL,
    `name`                  VARCHAR(90) NOT NULL,
    `description`           TEXT        ,
    `start_date`            DATETIME        NOT NULL,
    `end_date`              DATETIME        NOT NULL,
    `resource_id`           INT         ,
    `type_id`               INT         ,
    `deleted_date`          DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS `urls`;
CREATE TABLE `urls` (
    `id`             SERIAL      PRIMARY KEY,
    `url`            INT   
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS `roles_urls`;
CREATE TABLE `roles_urls` (
    `id`            SERIAL        PRIMARY KEY,
    `role_id`       INT             ,
    `url_id`        INT                      
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;
