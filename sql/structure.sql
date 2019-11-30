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

/* Таблица "дисциплина" */
DROP TABLE IF EXISTS "discipline";
CREATE TABLE "discipline" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(150)NOT NULL,
    "short_name"            VARCHAR(20) NOT NULL,
    `deleted_date`          TIMESTAMP
);

/* Таблица "номер занятия" */
DROP TABLE IF EXISTS "lesson_number";
CREATE TABLE "lesson_number" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                SMALLINT    NOT NULL UNIQUE,
    "start_time_1"          TIME        NOT NULL,
    "end_time_1"            TIME        NOT NULL,
    "start_time_2"          TIME        NOT NULL,
    "end_time_2"            TIME        NOT NULL,
    `deleted_date`          TIMESTAMP
);

/* Таблица "тип помещения" */
DROP TABLE IF EXISTS "room_type";
CREATE TABLE "room_type" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

DROP TABLE IF EXISTS "building";
CREATE TABLE "building" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(200) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "аудитория" */
DROP TABLE IF EXISTS "lecture_room";
CREATE TABLE "lecture_room" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                VARCHAR(5)  NOT NULL,
    "type_id"               SMALLINT    ,
    "building_id"           INT,
    "seats_count"           SMALLINT,
    `deleted_date`          TIMESTAMP         
);

/* Таблица "тип занятия" */
DROP TABLE IF EXISTS "lesson_type";
CREATE TABLE "lesson_type" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(30) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "должность" */
DROP TABLE IF EXISTS "position";
CREATE TABLE "position" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "ученая степень" */
DROP TABLE IF EXISTS "academic_degree" ;
CREATE TABLE "academic_degree" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "ученое звание" */
DROP TABLE IF EXISTS "academic_rank" ;
CREATE TABLE "academic_rank" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(40) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "роль" */
DROP TABLE IF EXISTS "role" ;
CREATE TABLE "role" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(25) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "пользователь" */
DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    "id"                    SERIAL      PRIMARY KEY,
    "login"                 VARCHAR(50) NOT NULL UNIQUE,
    "password"              VARCHAR(100)NOT NULL,
    `deleted_date`          TIMESTAMP
);

DROP TABLE IF EXISTS "user_role" ;
CREATE TABLE "user_role" (
    "id"                    SERIAL      PRIMARY KEY,
    "user_id"               INT NOT NULL,
    "role_id"               INT NOT NULL,
    `deleted_date`          TIMESTAMP
);

/* Таблица "кафедра" */
DROP TABLE IF EXISTS "department";
CREATE TABLE "department" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(100)NOT NULL UNIQUE,
    "faculty_id"            INT NOT NULL,
    "owner_id"              INT         ,
    "phone"                 VARCHAR(30) ,
    "room_id"               INT,
    `deleted_date`          TIMESTAMP      
);

/* Таблица "телефон" */
DROP TABLE IF EXISTS "phone";
CREATE TABLE "phone" (
    "id"                    SERIAL PRIMARY KEY
    "user_id"               INT         ,
    "phone"                 VARCHAR(30),
    `deleted_date`          TIMESTAMP
);

/* Таблица "ресурс" */
DROP TABLE IF EXISTS "resource";
CREATE TABLE "resource" (
    "id"                    SERIAL      PRIMARY KEY,
    "description"           TEXT        NOT NULL,
    `deleted_date`          TIMESTAMP
);

/* Таблица "информация о пользователе" */
DROP TABLE IF EXISTS "user_info";
CREATE TABLE "user_info" (
    "user_id"               INT         PRIMARY KEY,
    "description"           TEXT,
    "birthday"              DATE        NOT NULL,
    "city"                  VARCHAR(30) NOT NULL,
    "address"               TEXT        NOT NULL,
    "photo_id"              INT         ,
    `deleted_date`          TIMESTAMP         
);

/* Таблица "преподаватель" */
DROP TABLE IF EXISTS "teacher";
CREATE TABLE "teacher" (
    "id"                    INT         PRIMARY KEY,
    "full_name"             VARCHAR(150)NOT NULL,
    "short_name"            VARCHAR(50) NOT NULL,
    "department_id"         SMALLINT    ,
    "position_id"           SMALLINT    ,
    "academic_degree_id"    SMALLINT    ,
    "academic_rank_id"      SMALLINT    ,
    `deleted_date`          TIMESTAMP    
);

/* Таблица "факультет" */
DROP TABLE IF EXISTS "faculty";
CREATE TABLE "faculty" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(100)NOT NULL UNIQUE,
    "short_name"            VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "информация о факультете" */
DROP TABLE IF EXISTS "info_faculty" ;
CREATE TABLE "info_faculty" (
    "id"                    SMALLINT    PRIMARY KEY,
    "description"           TEXT        ,
    "phone_number"          VARCHAR(20) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "специальность" */
DROP TABLE IF EXISTS "specialty" ;
CREATE TABLE "specialty" (
    "id"                    SERIAL      PRIMARY KEY,
    "code"                  VARCHAR(20) NOT NULL UNIQUE,
    "name"                  VARCHAR(100) NOT NULL UNIQUE,
    "short_name"            VARCHAR(60) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "форма обучения" */
DROP TABLE IF EXISTS "study_mode" ;
CREATE TABLE "study_mode" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(45) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "группа" */
DROP TABLE IF EXISTS "group";
CREATE TABLE "group" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                VARCHAR(4)  NOT NULL,
    "faculty_id"            SMALLINT    ,
    "specialty_id"          SMALLINT    ,
    "study_mode_id"         SMALLINT    ,
    `deleted_date`          TIMESTAMP    
);

/* Таблица "подгруппа" */
DROP TABLE IF EXISTS "subgroup";
CREATE TABLE "subgroup" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(20) NOT NULL,
    "group_id"              INT         ,
    `deleted_date`          TIMESTAMP         
);

/* Таблица "подгруппа и студент" */
DROP TABLE IF EXISTS "subgroup_vs_student";
CREATE TABLE "subgroup_vs_student" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INT         ,
    "subgroup_id"           INT         ,
    `deleted_date`          TIMESTAMP         
);

/* Таблица "куратор" */
DROP TABLE IF EXISTS "curator";
CREATE TABLE "curator" (
    "id"                    SERIAL      PRIMARY KEY,
    "group_id"              INT         ,
    "teacher_id"            INT         ,
    `deleted_date`          TIMESTAMP         
);

/* Таблица "занятие" */
DROP TABLE IF EXISTS "lesson" ;
CREATE TABLE "lesson" (
    "id"                    SERIAL      PRIMARY KEY,
    "group_id"              INT         ,
    "subgroup_id"           INT         ,
    "teacher_id"            INT         ,
    "type_id"               SMALLINT    ,
    "room_id"               SMALLINT    ,
    "discipline_id"         SMALLINT    ,
    "lesson_number_id"      SMALLINT    ,
    "week_day"              SMALLINT    NOT NULL,
    `deleted_date`          TIMESTAMP
);

/* Таблица "студент" */
DROP TABLE IF EXISTS "student";
CREATE TABLE "student" ( 
    "id"                    INT             PRIMARY KEY,
    "full_name"             VARCHAR(300)    NOT NULL,
    "short_name"            VARCHAR(100)    NOT NULL,
    "group_id"              INT             ,
    "record_book"           VARCHAR(30)     NOT NULL,
    `deleted_date`          TIMESTAMP
);

-- /* Таблица "результат экзамена" */
-- DROP TABLE IF EXISTS "exam_result";
-- CREATE TABLE "exam_result" (
--     "student_id"            INT         REFERENCES "student",
--     "discipline_id"         SMALLINT    REFERENCES "discipline",
--     "semester"              SMALLINT    NOT NULL CHECK ("semester" > 0 AND "semester" < 11),
--     "exam_score"            SMALLINT    NOT NULL CHECK ("exam_score" > 0 AND "exam_score" < 11),
--     UNIQUE("student_id", "discipline_id", "semester")
-- );

-- /* Таблица "зачет" */
-- DROP TABLE IF EXISTS "credit";
-- CREATE TABLE "credit" (
--     "student_id"            SMALLINT    REFERENCES "student",
--     "discipline_id"         SMALLINT    REFERENCES "discipline",
--     "semester"              SMALLINT    NOT NULL CHECK ("semester" > 0 AND "semester" < 11),
--     "credit"                BOOL        NOT NULL,
--     UNIQUE("student_id", "discipline_id", "semester")
-- );

/******************************************************************************\
|****** Далее идет часть БД связанная с курсовыми и дипломными работами, ******|
|****** а также практикой студентов. Т.к. я не разбираюсь, какая может   ******|
|****** понадобиться в этих таблицах информация, то просто возьму за ос- ******|
|****** нову те таблицы, что у нас уже есть и совмещу это таблицами, что ******|
|****** найдены в интернете в рамках других курсовых работ.              ******|
\******************************************************************************/

/* Таблица "статус" */
DROP TABLE IF EXISTS "status";
CREATE TABLE "status" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(12) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "заявка" */
DROP TABLE IF EXISTS "request";
CREATE TABLE "request" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INT         ,
    "teacher_id"            INT         ,
    "status_id"             SMALLINT    ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "create_date"           DATE        NOT NULL DEFAULT CURRENT_DATE,
    "update_date"           DATE        ,
    "description"           TEXT        ,
    `deleted_date`          TIMESTAMP
);

/* Таблица "курсовая работа" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS "term_paper";
CREATE TABLE "term_paper" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INT         ,
    "teacher_id"            INT         ,
    "status_id"             SMALLINT    ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "resource_id"           INT         ,
    `deleted_date`          TIMESTAMP
);

/* Таблица "дипломная работа" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS "graduation_paper";
CREATE TABLE "graduation_paper" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INT         ,
    "teacher_id"            INT         ,
    "status_id"             SMALLINT    ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "resource_id"           INT         ,
    `deleted_date`          TIMESTAMP  
);

/* Таблица "организация" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS "organization";
CREATE TABLE "organization" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(90) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "виды практик" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS "practice_type";
CREATE TABLE "practice_type" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(50) NOT NULL UNIQUE,
    `deleted_date`          TIMESTAMP
);

/* Таблица "практика" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
DROP TABLE IF EXISTS "practice";
CREATE TABLE "practice" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INT         ,
    "organization_id"       SMALLINT    ,
    "status_id"             INT         ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "start_date"            DATE        NOT NULL,
    "end_date"              DATE        NOT NULL,
    "resource_id"           INT         ,
    "type_id"               INT         ,
    `deleted_date`          TIMESTAMP
);

DROP TABLE IF EXISTS "urls";
CREATE TABLE "urls" (
    "id"    SERIAL      PRIMARY KEY,
    "url"   VARCHAR(255)   
);

DROP TABLE IF EXISTS "roles_urls";
CREATE TABLE "roles_urls" (
    "id"        SERIAL      PRIMARY KEY,
    "url_id"    INT,
    "role_id"   INT
);