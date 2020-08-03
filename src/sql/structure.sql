/* Таблица "контрольные точки" */
DROP TABLE IF EXISTS "control_points";
CREATE TABLE "control_points" (
    "id"             SERIAL         PRIMARY KEY,
    "url"            VARCHAR(2048)  NOT NULL,
    "deleted_date"   TIMESTAMP
);

/* Таблица "роли и контрольные точки" */
DROP TABLE IF EXISTS "roles_control_points";
CREATE TABLE "roles_control_points" (
    "id"                SERIAL      PRIMARY KEY,
    "role_id"           INTEGER     ,
    "control_point_id"  INTEGER     ,
    "permission_mask"   INTEGER 	NOT NULL,
    "deleted_date"      TIMESTAMP               
);

/* Таблица "роли" */
DROP TABLE IF EXISTS "roles" ;
CREATE TABLE "roles" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(50) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "пользователь" */
DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
    "id"                    SERIAL          PRIMARY KEY,
    "login"                 VARCHAR(100)    NOT NULL /* UNIQUE */,
    "password"              VARCHAR(100)    NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "пользователи и роли" */
DROP TABLE IF EXISTS "users_roles" ;
CREATE TABLE "users_roles" (
    "id"                    SERIAL      PRIMARY KEY,
    "user_id"               INTEGER     NOT NULL,
    "role_id"               INTEGER     NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "ресурсы" */
DROP TABLE IF EXISTS "resources";
CREATE TABLE "resources" (
    "id"                    SERIAL          PRIMARY KEY,
    "path"                  VARCHAR(2048)   NOT NULL,
    "original_name"         VARCHAR(2048)   NOT NULL,
    "current_name"          VARCHAR(2048)   NOT NULL,
    "size"                  INTEGER         NOT NULL,     
    "mime_type"             VARCHAR(50)     NOT NULL,
    "description"           TEXT            ,
    "attributes"            JSON            ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "информация о пользователях" */
DROP TABLE IF EXISTS "users_info";
CREATE TABLE "users_info" (
    "id"                    SERIAL          PRIMARY KEY,
    "user_id"               INTEGER         UNIQUE,
    "full_name"             VARCHAR(255)    NOT NULL,
    "sex"                   VARCHAR(2)      ,
    "email"                 VARCHAR(255)    ,
    "description"           TEXT            ,
    "birthday"              DATE            ,
    "city"                  VARCHAR(255)    ,
    "address"               TEXT            ,
    "photo_id"              INTEGER         ,
    "deleted_date"          TIMESTAMP         
);

/* Таблица "телефоны" */
DROP TABLE IF EXISTS "phones";
CREATE TABLE "phones" (
    "id"                    SERIAL      PRIMARY KEY,
    "user_id"               INTEGER     ,
    "phone"                 VARCHAR(30) ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "факультеты" */
DROP TABLE IF EXISTS "faculties";
CREATE TABLE "faculties" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "short_name"            VARCHAR(50)     NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "информация о факультетах" */
DROP TABLE IF EXISTS "info_faculties";
CREATE TABLE "info_faculties" (
    "id"                    SERIAL      PRIMARY KEY,
    "faculty_id"            INTEGER     UNIQUE,
    "description"           TEXT        ,
    "phone_number"          VARCHAR(50) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "тип помещения" */
DROP TABLE IF EXISTS "room_types";
CREATE TABLE "room_types" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(50) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "здания" */
DROP TABLE IF EXISTS "buildings";
CREATE TABLE "buildings" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "address"               TEXT            NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "аудитории" */
DROP TABLE IF EXISTS "lecture_rooms";
CREATE TABLE "lecture_rooms" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                VARCHAR(5)  NOT NULL,
    "room_type_id"          INTEGER     ,
    "building_id"           INTEGER     ,
    "seats_count"           INTEGER     ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "кафедры" */
DROP TABLE IF EXISTS "departments";
CREATE TABLE "departments" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "faculty_id"            INTEGER         NOT NULL,
    "owner_id"              INTEGER         ,
    "phone"                 VARCHAR(30)     ,
    "lecture_room_id"       INTEGER         ,
    "deleted_date"          TIMESTAMP      
);

/* Таблица "должностьи" */
DROP TABLE IF EXISTS "positions";
CREATE TABLE "positions" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "min_rate"              REAL	        NOT NULL,
    "max_rate"              REAL	        NOT NULL,
    "note"                  TEXT            ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "ученые степени" */
DROP TABLE IF EXISTS "academic_degrees" ;
CREATE TABLE "academic_degrees" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "ученые звания" */
DROP TABLE IF EXISTS "academic_ranks" ;
CREATE TABLE "academic_ranks" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "преподаватели" */
DROP TABLE IF EXISTS "teachers";
CREATE TABLE "teachers" (
    "id"                    SERIAL          PRIMARY KEY,
    "user_id"               INTEGER         ,
    "full_name"             VARCHAR(150)    NOT NULL,
    "short_name"            VARCHAR(50)     NOT NULL,
    "department_id"         INTEGER         ,
    "academic_degree_id"    INTEGER         ,
    "academic_rank_id"      INTEGER         ,
    "deleted_date"          TIMESTAMP    
);

/* Таблица "преподаватели и должности" */
DROP TABLE IF EXISTS "teachers_positions";
CREATE TABLE "teachers_positions" (
    "id"                    SERIAL          PRIMARY KEY,
    "position_id"           INTEGER         ,
    "teacher_id"            INTEGER         ,
    "department_id"         INTEGER         ,
    "rate"                  REAL            ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "специальностьи" */
DROP TABLE IF EXISTS "specialties" ;
CREATE TABLE "specialties" (
    "id"                    SERIAL          PRIMARY KEY,
    "code"                  VARCHAR(20)     NOT NULL /* UNIQUE */,
    "name"                  VARCHAR(100)    NOT NULL /* UNIQUE */,
    "short_name"            VARCHAR(60)     NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "формы обучения" */
DROP TABLE IF EXISTS "study_modes" ;
CREATE TABLE "study_modes" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(45) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "группы" */
DROP TABLE IF EXISTS "groups";
CREATE TABLE "groups" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                VARCHAR(4)  NOT NULL,
    "faculty_id"            INTEGER     ,
    "specialty_id"          INTEGER     ,
    "study_mode_id"         INTEGER     ,
    "deleted_date"          TIMESTAMP    
);

/* Таблица "кураторы" */
DROP TABLE IF EXISTS "curators";
CREATE TABLE "curators" (
    "id"                    SERIAL      PRIMARY KEY,
    "group_id"              INTEGER     ,
    "teacher_id"            INTEGER     ,
    "deleted_date"          TIMESTAMP         
);

/* Таблица "студенты" */
DROP TABLE IF EXISTS "students";
CREATE TABLE "students" (
    "id"                    SERIAL          PRIMARY KEY,
    "user_id"               INTEGER         ,
    "full_name"             VARCHAR(150)    NOT NULL,
    "short_name"            VARCHAR(50)     NOT NULL,
    "group_id"              INTEGER         ,
    "record_book"           VARCHAR(30)     NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "подгруппы" */
DROP TABLE IF EXISTS "subgroups";
CREATE TABLE "subgroups" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(20) NOT NULL,
    "group_id"              INTEGER     ,
    "deleted_date"          TIMESTAMP         
);

/* Таблица "подгруппы и студенты" */
DROP TABLE IF EXISTS "students_subgroups";
CREATE TABLE "students_subgroups" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INTEGER     ,
    "subgroup_id"           INTEGER     ,
    "deleted_date"          TIMESTAMP         
);

/* Таблица "статусы" */
DROP TABLE IF EXISTS "statuses";
CREATE TABLE "statuses" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(12) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "заявки" */
DROP TABLE IF EXISTS "requests";
CREATE TABLE "requests" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INTEGER     ,
    "teacher_id"            INTEGER     ,
    "status_id"             INTEGER     ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "create_date"           TIMESTAMP   DEFAULT (CURRENT_DATE),
    "update_date"           TIMESTAMP   ,
    "description"           TEXT        ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "курсовые работы" */
DROP TABLE IF EXISTS "term_papers";
CREATE TABLE "term_papers" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INTEGER     ,
    "teacher_id"            INTEGER     ,
    "status_id"             INTEGER     ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "resource_id"           INTEGER     ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "дипломные работы" */
DROP TABLE IF EXISTS "graduation_papers";
CREATE TABLE "graduation_papers" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INTEGER     ,
    "teacher_id"            INTEGER     ,
    "status_id"             INTEGER     ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "resource_id"           INTEGER     ,
    "deleted_date"          TIMESTAMP  
);

/* Таблица "организации" */
DROP TABLE IF EXISTS "organizations";
CREATE TABLE "organizations" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(90) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "виды практик" */
DROP TABLE IF EXISTS "practice_types";
CREATE TABLE "practice_types" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(50) NOT NULL /* UNIQUE */,
    "deleted_date"          TIMESTAMP
);

/* Таблица "практики" */
DROP TABLE IF EXISTS "practices";
CREATE TABLE "practices" (
    "id"                    SERIAL      PRIMARY KEY,
    "student_id"            INTEGER     ,
    "organization_id"       INTEGER     ,
    "status_id"             INTEGER     ,
    "topic"                 VARCHAR(50) NOT NULL,
    "name"                  VARCHAR(90) NOT NULL,
    "description"           TEXT        ,
    "start_date"            DATE        NOT NULL,
    "end_date"              DATE        NOT NULL,
    "resource_id"           INTEGER     ,
    "practice_type_id"      INTEGER     ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "дисциплины" */
DROP TABLE IF EXISTS "disciplines";
CREATE TABLE "disciplines" (
    "id"                    SERIAL          PRIMARY KEY,
    "name"                  VARCHAR(150)    NOT NULL,
    "short_name"            VARCHAR(20)     NOT NULL,
    "study_mode_id"         INT             NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "учебные годы" */
DROP TABLE IF EXISTS "study_years";
CREATE TABLE "study_years" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(90) NOT NULL,
    "start_date"            DATE        NOT NULL,
    "end_date"              DATE        NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "практики" */
DROP TABLE IF EXISTS "subjects";
CREATE TABLE "subjects" (
    "id"                    SERIAL      PRIMARY KEY,
    "group_id"              INTEGER     ,
    "subgroup_id"           INTEGER     ,
    "teacher_id"            INTEGER     ,
    "discipline_id"         INTEGER     ,
    "study_year_id"         INTEGER     ,
    "student_amount"        INTEGER     ,
    "subject_number"        INTEGER     ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "типы занятий" */
DROP TABLE IF EXISTS "lesson_types";
CREATE TABLE "lesson_types" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(30) NOT NULL,
    "short_name"            VARCHAR(10) NOT NULL,
    "rate"                  REAL        NOT NULL,
    "is_static"             BOOLEAN     NOT NULL,
    "note"                  TEXT        NOT NULL,
    "time_sheet_number"     INTEGER     NOT NULL,
    "is_calculated"         BOOLEAN     DEFAULT TRUE,
    "deleted_date"          TIMESTAMP
);

/* Таблица "нагрузка" */
DROP TABLE IF EXISTS "time_sheet";
CREATE TABLE "time_sheet" (
    "id"                    SERIAL      PRIMARY KEY,
    "subject_id"            INTEGER     NOT NULL,
    "lesson_type_id"        INTEGER     NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "план" */
DROP TABLE IF EXISTS "plan";
CREATE TABLE "plan" (
    "id"                    SERIAL          PRIMARY KEY,
    "theme"                 VARCHAR(255)    NOT NULL,
    "group_id"              INTEGER         ,
    "subgroup_id"           INTEGER         ,
    "teacher_id"            INTEGER         ,
    "discipline_id"         INTEGER         ,
    "lesson_type_id"        INTEGER         ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "номера занятий" */
DROP TABLE IF EXISTS "lesson_numbers";
CREATE TABLE "lesson_numbers" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                INTEGER     NOT NULL /* UNIQUE */,
    "start_time_1"          TIME        NOT NULL,
    "end_time_1"            TIME        NOT NULL,
    "start_time_2"          TIME        NOT NULL,
    "end_time_2"            TIME        NOT NULL,
    "deleted_date"          TIMESTAMP
);

/* Таблица "замены" */
DROP TABLE IF EXISTS "replacements";
CREATE TABLE "replacements" (
    "id"                    SERIAL      PRIMARY KEY,
    "teacher_id"            INTEGER         ,
    "deleted_date"          TIMESTAMP
);

/* Таблица "занятия" */
DROP TABLE IF EXISTS "lessons" ;
CREATE TABLE "lessons" (
    "id"                    SERIAL      PRIMARY KEY,
    "lesson_type_id"        INTEGER     ,
    "plan_id"               INTEGER     ,
    "lecture_room_id"       INTEGER     ,
    "lesson_number_id"      INTEGER     ,
    "week_day"              INTEGER     NOT NULL,
    "replacement_id"        INTEGER     ,
    "date"                  TIMESTAMP   ,
    "deleted_date"          TIMESTAMP
);
