/*
  'method': {
    'GET': 1,
    'POST': 2,
    'PUT': 4,
    'DELETE': 8
  }
*/

INSERT INTO "control_points"(id, url) VALUES

(   1   ,   '/buildings'        	),
(   2   ,   '/buildings/\d'    	),

(   3   ,   '/disciplines'      	),
(   4   ,   '/disciplines/\d'  	),

(   5  	,   '/lectureRooms'     	),
(   6  	,   '/lectureRooms/\d' 	),

(   7  	,   '/lessonNumbers'    	),
(   8  	,   '/lessonNumbers/\d'	),

(   9  	,   '/lessonTypes'      	),
(   10 	,   '/lessonTypes/\d'  	),

(   11  ,   '/lessons'      		),
(   12  ,   '/lessons/\d'  		),

(   13  ,   '/roomTypes'    		),
(   14  ,   '/roomTypes/\d'		),

(   15  ,   '/departments'      	),
(   16  ,   '/departments/\d'  	),

(   17  ,   '/faculties'    		),
(   18  ,   '/faculties/\d'		),

(   19  ,   '/groups'       		),
(   20  ,   '/groups/\d'   		),

(   21  ,   '/specialties'      	),
(   22  ,   '/specialties/\d'  	),

(   23  ,   '/departments'      	),
(   24  ,   '/departments/\d'  	),

(   25  ,   '/studyModes'       	),
(   26  ,   '/studyModes/\d'   	),

(   27  ,   '/subgroups'    		),
(   28  ,   '/subgroups/\d'		),

(   29  ,   '/graduationPapers'     ),
(   30  ,   '/graduationPapers/\d' ),

(   31  ,   '/organizations'    	),
(   32  ,   '/organizations/\d'	),

(   33  ,   '/practices'    		),
(   34  ,   '/practices/\d'		),

(   35  ,   '/practiceTypes'    	),
(   36  ,   '/practiceTypes/\d'	),

(   37  ,   '/requests'     		),
(   38  ,   '/requests/\d' 		),

(   39  ,   '/resources'    		),
(   40  ,   '/resources/\d'		),

(   41  ,   '/statuses'     		),
(   42  ,   '/statuses/\d' 		),

(   43  ,   '/termPapers'       	),
(   44  ,   '/termPapers/\d'   	),

(   45	,  	'/roles' 				),
(   46	,   '/roles/\d' 			),

(   47	,   '/controlPoints'    	),
(   48	,   '/controlPoints/\d'	),

(   49  ,   '/teachers'    			),
(   50  ,   '/teachers/\d'			),

(   51  ,   '/students'				),
(   52  ,   '/students/\d'			),

(   53	,   '/users'          		),
(   54	,   '/users/\d'      		),
(   55	,   '/users/options'  		);

INSERT INTO "roles_control_points"(role_id, control_point_id, permission_mask) VALUES

(	1	,	1   ,   1 + 2),
(	1	,	2   ,   1 + 4 + 8),

(	1	,	3   ,   1 + 2),
(	1	,	4   ,   1 + 4 + 8),

(	1	,	5  	,   1 + 2),
(	1	,	6  	,   1 + 4 + 8),

(	1	,	7  	,   1 + 2),
(	1	,	8  	,   1 + 4 + 8),

(	1	,	9  	,   1 + 2),
(	1	,	10 	,   1 + 4 + 8),

(	1	,	11  ,   1 + 2),
(	1	,	12  ,   1 + 4 + 8),

(	1	,	13  ,   1 + 2),
(	1	,	14  ,   1 + 4 + 8),

(	1	,	15  ,   1 + 2),
(	1	,	16  ,   1 + 4 + 8),

(	1	,	17  ,   1 + 2),
(	1	,	18  ,   1 + 4 + 8),

(	1	,	19  ,   1 + 2),
(	1	,	20  ,   1 + 4 + 8),

(	1	,	21  ,   1 + 2),
(	1	,	22  ,   1 + 4 + 8),

(	1	,	23  ,   1 + 2),
(	1	,	24  ,   1 + 4 + 8),

(	1	,	25  ,   1 + 2),
(	1	,	26  ,   1 + 4 + 8),

(	1	,	27  ,   1 + 2),
(	1	,	28  ,   1 + 4 + 8),

(	1	,	29  ,   1 + 2),
(	1	,	30  ,   1 + 4 + 8),

(	1	,	31  ,   1 + 2),
(	1	,	32  ,   1 + 4 + 8),

(	1	,	33  ,   1 + 2),
(	1	,	34  ,   1 + 4 + 8),

(	1	,	35  ,   1 + 2),
(	1	,	36  ,   1 + 4 + 8),

(	1	,	37  ,   1 + 2),
(	1	,	38  ,   1 + 4 + 8),

(	1	,	39  ,   1 + 2),
(	1	,	40  ,   1 + 4 + 8),

(	1	,	41  ,   1 + 2),
(	1	,	42  ,   1 + 4 + 8),

(	1	,	43  ,   1 + 2),
(	1	,	44  ,   1 + 4 + 8),

(	1	,	45	,   1 + 2),
(	1	,	46	,  	1 + 4 + 8),

(	1	,	47	,   1 + 2),
(	1	,	48	,	1 + 4 + 8),

(	1	,	49  ,   1 + 2),
(	1	,	50  ,  	1 + 4 + 8),

(	1	,	51  ,   1 + 2),
(	1	,	52  ,  	1 + 4 + 8),

(	1	,	53	,   1 + 2),
(	1	,	54	,   1 + 4 + 8),
(	1	,	55	,   1 + 4);