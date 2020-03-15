/* Таблица "дисциплина" */
DROP DATABASE IF EXISTS "myuniversity";
CREATE DATABASE "myuniversity" 
	WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = 100;