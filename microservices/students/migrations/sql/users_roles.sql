CREATE TABLE "user_role" (
    "id"                    SERIAL      PRIMARY KEY,
    "user_id"               INT NOT NULL,
    "role_id"               INT NOT NULL
);