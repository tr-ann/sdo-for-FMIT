CREATE TABLE "role" (
    "id"                    SERIAL      PRIMARY KEY,
    "name"                  VARCHAR(25) NOT NULL UNIQUE
);