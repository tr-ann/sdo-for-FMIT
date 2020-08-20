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
  "permission_mask"   INTEGER 	  NOT NULL,
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

/* Таблица "информация о пользователях" */
DROP TABLE IF EXISTS "users_info";
CREATE TABLE "users_info" (
  "id"                    SERIAL          PRIMARY KEY,
  "user_id"               INTEGER         UNIQUE,
  "full_name"             VARCHAR(255)    NOT NULL,
  "sex"                   VARCHAR(1)      ,
  "email"                 VARCHAR(255)    ,
  "description"           TEXT            ,
  "birthday"              DATE            ,
  "city_id"               INTEGER         ,
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

/* Таблица "студенты" */
DROP TABLE IF EXISTS "students";
CREATE TABLE "students" (
  "id"                    SERIAL          PRIMARY KEY,
  "user_id"               INTEGER         ,
  "full_name"             VARCHAR(150)    NOT NULL,
  "group_id"              INTEGER         ,
  "record_book"           VARCHAR(30)     NOT NULL,
  "deleted_date"          TIMESTAMP
);

/* Таблица "информация о студентах" */
DROP TABLE IF EXISTS "students_info";
CREATE TABLE "students_info" (
  "id"                      SERIAL          PRIMARY KEY,
  "student_id"              INTEGER         NOT NULL UNIQUE,
  "city_id"                 INTEGER         ,
  "address"                 VARCHAR(255)    ,
  "sex"                     VARCHAR(1)      ,
  "passport_number"         VARCHAR(10)     ,
  "passport_provider"       VARCHAR(100)    ,
  "passport_date"           DATE            ,
  "birthday"                DATE            ,
  "citizenship"             VARCHAR(50)     ,
  "finished_education_id"   INTEGER         ,
  "diseases"                VARCHAR(255)    ,
  "pe_group"                VARCHAR(20)     ,
  "individual_info"         TEXT            ,
  "is_brsm"                 BOOLEAN         ,
  "parent1_name"            VARCHAR(255)    ,
  "parent1_work"            VARCHAR(255)    ,
  "parent1_address"         VARCHAR(255)    ,
  "parent1_phone"           VARCHAR(50)     ,
  "parent2_name"            VARCHAR(255)    ,
  "parent2_work"            VARCHAR(255)    ,
  "parent2_address"         VARCHAR(255)    ,
  "parent2_phone"           VARCHAR(50)     ,
  "deleted_date"            TIMESTAMP
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

/* Таблица "формы обучения" */
DROP TABLE IF EXISTS "study_modes" ;
CREATE TABLE "study_modes" (
  "id"                    SERIAL      PRIMARY KEY,
  "name"                  VARCHAR(45) NOT NULL /* UNIQUE */,
  "deleted_date"          TIMESTAMP
);

DROP TABLE IF EXISTS "countries";
CREATE TABLE "countries" (
  "id"      SERIAL        PRIMARY KEY,
  "name"    VARCHAR(100)  NOT NULL
);

DROP TABLE IF EXISTS "countries";
CREATE TABLE "countries" (
  "id"      SERIAL        PRIMARY KEY,
  "name"    VARCHAR(100)  NOT NULL
);

DROP TABLE IF EXISTS "regions";
CREATE TABLE "regions" (
  "id"          SERIAL        PRIMARY KEY,
  "country_id"  INTEGER       NOT NULL,
  "name"        VARCHAR(100)  NOT NULL
);

DROP TABLE IF EXISTS "cities";
CREATE TABLE "cities" (
  "id"          SERIAL        PRIMARY KEY,
  "region_id"   INTEGER       NOT NULL,
  "name"        VARCHAR(100)  NOT NULL
);

DROP TABLE IF EXISTS "finished_educations";
CREATE TABLE "finished_educations" (
  "id"      SERIAL        PRIMARY KEY,
  "name"    VARCHAR(100)  NOT NULL
);