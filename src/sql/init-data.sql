
INSERT INTO `control_points`(`id`, `url`, `method`) VALUES
(   1   ,   "/users"    ,   "GET"),
(   2   ,   "/users"    ,   "POST"),
(   3   ,   "/users/\\d" ,  "GET"),
(   4   ,   "/users/\\d" ,  "POST"),
(   5   ,   "/users/\\d" ,  "DELETE"),
(   6   ,   "/faculties" ,   "GET"),
(   7   ,   "/faculties" ,   "POST"),
(   8   ,   "/faculties/\\d" ,  "GET"),
(   9   ,   "/faculties/\\d" ,  "POST"),
(   10  ,   "/faculties/\\d" ,  "DELETE");

INSERT INTO `access_rules`(`id`, `role_id`, `control_point_id`) VALUES
(   1   ,   1   ,   3   ),
(   2   ,   1   ,   4   ),

(   3   ,   2   ,   1   ),
(   4   ,   2   ,   2   ),
(   5   ,   2   ,   3   ),
(   6   ,   2   ,   4   ),
(   7   ,   2   ,   5   ),

(   8   ,   1   ,   6   ),
(   9   ,   1   ,   8   ),

(   10  ,   2   ,   6   ),
(   11  ,   2   ,   8   ),
(   12  ,   2   ,   7   ),
(   13  ,   2   ,   9   ),
(   14  ,   2   ,   10  );