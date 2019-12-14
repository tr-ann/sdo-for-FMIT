INSERT INTO `roles`(`id`, `name`) VALUES
(   1   ,   "authenticate_user"),
(   2   ,   "admin"   );

INSERT INTO `control_points`(`id`, `url`, `method`) VALUES
(   1   ,   "/users"    ,   "GET"),
(   2   ,   "/users"    ,   "POST"),
(   3   ,   "/users/\d" ,  "GET"),
(   4   ,   "/users/\d" ,  "POST"),
(   5   ,   "/users/\d" ,  "DELETE");

INSERT INTO `access_rules`(`id`, `role_id`, `control_point_id`) VALUES
(   1   ,   1   ,   3   ),
(   2   ,   1   ,   4   ),

(   3   ,   2   ,   1   ),
(   4   ,   2   ,   2   ),
(   5   ,   2   ,   3   ),
(   6   ,   2   ,   4   ),
(   7   ,   2   ,   5   );