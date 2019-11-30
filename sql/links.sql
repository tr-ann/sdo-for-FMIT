/* таблица аудитории */
ALTER TABLE lecture_room
    ADD CONSTRAINT FK_lecture_room_to_room_type     FOREIGN KEY(type_id)    REFERENCES room_type(id),
		ADD CONSTRAINT FK_lecture_room_to_building     FOREIGN KEY(building_id)    REFERENCES building(id);
			
/* таблица кафедра */
ALTER TABLE department
    ADD CONSTRAINT FK_department_to_user FOREIGN KEY(owner_id) REFERENCES user(id),
        ADD CONSTRAINT FK_department_to_lecture_room FOREIGN KEY(room_id) REFERENCES lecture_room(id);
			ADD CONSTRAINT FK_department_to_faculty FOREIGN KEY(faculty_id) REFERENCES faculty(id);
	
/* таблица пользователь */
ALTER TABLE user_role
	ADD CONSTRAINT FK_user_role_to_role FOREIGN KEY(role_id) REFERENCES role(id),
		ADD CONSTRAINT FK_user_role_to_user FOREIGN KEY(user_id) REFERENCES user(id);
    
/* таблица телефон */
ALTER TABLE phone
	ADD CONSTRAINT FK_phone_to_user FOREIGN KEY(user_id) REFERENCES user(id);
	
/* таблица информация о пользователе */
ALTER TABLE user_info
    ADD CONSTRAINT FK_user_info_to_user FOREIGN KEY(user_id) REFERENCES user(id),
        ADD CONSTRAINT FK_user_info_to_resource FOREIGN KEY(photo_id) REFERENCES resource(id);

/* таблица преподаватель */
ALTER TABLE teacher
    ADD CONSTRAINT FK_teacher_to_user FOREIGN KEY(id) REFERENCES user(id),
        ADD CONSTRAINT FK_teacher_to_department FOREIGN KEY(department_id) REFERENCES department(id),
            ADD CONSTRAINT FK_teacher_to_position FOREIGN KEY(position_id) REFERENCES position(id),
                ADD CONSTRAINT FK_teacher_to_academic_degree FOREIGN KEY(academic_degree_id) REFERENCES academic_degree(id),
                    ADD CONSTRAINT FK_teacher_to_academic_rank FOREIGN KEY(academic_rank_id) REFERENCES academic_rank(id);
							
/* таблица информация о факультете */
ALTER TABLE info_faculty
	ADD CONSTRAINT FK_info_faculty_to_faculty FOREIGN KEY(id) REFERENCES faculty(id);
						
/* таблица группа */
ALTER TABLE group
	ADD CONSTRAINT FK_group_to_faculty FOREIGN KEY(faculty_id) REFERENCES faculty(id),
	    ADD CONSTRAINT FK_group_to_specialty FOREIGN KEY(specialty_id) REFERENCES specialty(id),
	        ADD CONSTRAINT FK_group_to_study_mode FOREIGN KEY(study_mode_id) REFERENCES study_mode(id);
	
/* таблица подгруппа */
ALTER TABLE subgroup
	ADD CONSTRAINT FK_subgroup_to_group FOREIGN KEY(group_id) REFERENCES group(id);

/* таблица подгруппа и студент */
ALTER TABLE subgroup_vs_student
	ADD CONSTRAINT FK_subgroup_vs_student_to_subgroup FOREIGN KEY(subgroup_id) REFERENCES subgroup(id),
        ADD CONSTRAINT FK_subgroup_vs_student_to_student FOREIGN KEY(student_id) REFERENCES student(id);

/* таблица куратор */
ALTER TABLE curator
	ADD CONSTRAINT FK_curator_to_group FOREIGN KEY(group_id) REFERENCES group(id),
        ADD CONSTRAINT FK_curator_to_teacher FOREIGN KEY(teacher_id) REFERENCES teacher(id);

/* таблица занятие */
ALTER TABLE lesson
	ADD CONSTRAINT FK_lesson_to_group FOREIGN KEY(group_id) REFERENCES group(id),
        ADD CONSTRAINT FK_lesson_to_subgroup FOREIGN KEY(subgroup_id) REFERENCES subgroup(id),
            ADD CONSTRAINT FK_lesson_to_teacher FOREIGN KEY(teacher_id) REFERENCES teacher(id),
                ADD CONSTRAINT FK_lesson_to_type FOREIGN KEY(type_id) REFERENCES lesson_type(id),
                    ADD CONSTRAINT FK_lesson_to_lecture_room FOREIGN KEY(room_id) REFERENCES lecture_room(id),
                        ADD CONSTRAINT FK_lesson_to_discipline FOREIGN KEY(discipline_id) REFERENCES discipline(id),  
                             ADD CONSTRAINT FK_lesson_to_lesson_number FOREIGN KEY(lesson_number_id) REFERENCES lesson_number(id);

/* таблица студент */
ALTER TABLE student
    ADD CONSTRAINT FK_student_to_user FOREIGN KEY("id") REFERENCES user(id),                            
        ADD CONSTRAINT FK_student_to_group FOREIGN KEY("group_id") REFERENCES group(id);

/* таблица запрос */
ALTER TABLE request
	ADD CONSTRAINT FK_request_to_student FOREIGN KEY(student_id) REFERENCES student(id),
		ADD CONSTRAINT FK_request_to_teacher FOREIGN KEY(teacher_id) REFERENCES teacher(id),
			ADD CONSTRAINT FK_request_to_status FOREIGN KEY(status_id) REFERENCES status(id);
			
/* таблица курсовая работа */
ALTER TABLE term_paper
	ADD CONSTRAINT FK_term_paper_to_student FOREIGN KEY(student_id) REFERENCES student(id),
		ADD CONSTRAINT FK_term_paper_to_teacher FOREIGN KEY(teacher_id) REFERENCES teacher(id),
			ADD CONSTRAINT FK_term_paper_to_status FOREIGN KEY(status_id) REFERENCES status(id),
		        ADD CONSTRAINT FK_term_paper_to_resource FOREIGN KEY(resource_id) REFERENCES resource(id);
			
/* таблица дипломная работа */
ALTER TABLE graduation_paper
	ADD CONSTRAINT FK_graduation_paper_to_student FOREIGN KEY(student_id) REFERENCES student(id),
		ADD CONSTRAINT FK_graduation_paper_to_teacher FOREIGN KEY(teacher_id) REFERENCES teacher(id),
			ADD CONSTRAINT FK_graduation_paper_to_status FOREIGN KEY(status_id) REFERENCES status(id),
		        ADD CONSTRAINT FK_graduation_paper_to_resource FOREIGN KEY(resource_id) REFERENCES resource(id);
			
/* таблица практика */
ALTER TABLE practice
	ADD CONSTRAINT FK_practice_to_student FOREIGN KEY(student_id) REFERENCES student(id),
		ADD CONSTRAINT FK_practice_to_organization FOREIGN KEY(organization_id) REFERENCES organization(id),		
			ADD CONSTRAINT FK_practice_to_status FOREIGN KEY(status_id) REFERENCES status(id),
		        ADD CONSTRAINT FK_practice_to_resource FOREIGN KEY(resource_id) REFERENCES resource(id),
                    ADD CONSTRAINT FK_practice_to_practice_type FOREIGN KEY(type_id) REFERENCES practice_type(id);

/* таблица roles_urls */
ALTER TABLE roles_urls
	ADD CONSTRAINT FK_roles_urls_to_roles FOREIGN KEY(role_id) REFERENCES roles(id),
        ADD CONSTRAINT FK_roles_urls_to_urls FOREIGN KEY(url_id) REFERENCES urls(id);