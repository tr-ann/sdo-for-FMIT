CREATE TABLE "lesson_number" (
    "id"                    SERIAL      PRIMARY KEY,
    "number"                SMALLINT    NOT NULL UNIQUE,
    "start_time_1"          TIME        NOT NULL,
    "end_time_1"            TIME        NOT NULL,
    "start_time_2"          TIME        NOT NULL,
    "end_time_2"            TIME        NOT NULL
);