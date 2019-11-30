CREATE TABLE "user" (
    "id"                    SERIAL      PRIMARY KEY,
    "login"                 VARCHAR(50) NOT NULL UNIQUE,
    "password"              VARCHAR(100)NOT NULL
);