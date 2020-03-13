/* Таблица "дисциплина" */
DROP DATABASE IF EXISTS "my_university";
CREATE DATABASE "my_university" 
	WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = 100;