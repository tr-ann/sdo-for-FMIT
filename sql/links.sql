USE `sdo_db`;

/* таблица аудитории */
ALTER TABLE lecture_rooms

    ADD CONSTRAINT FK_lecture_rooms_to_room_types FOREIGN KEY (type_id)    
		REFERENCES room_types(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_lecture_rooms_to_buildings FOREIGN KEY (building_id) 
		REFERENCES buildings(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;
			
            
/* таблица кафедра */
ALTER TABLE departments
    ADD CONSTRAINT FK_departments_to_users FOREIGN KEY(owner_id) REFERENCES users(id),
        ADD CONSTRAINT FK_departments_to_lecture_rooms FOREIGN KEY(room_id) REFERENCES lecture_rooms(id),
			ADD CONSTRAINT FK_departments_to_faculties FOREIGN KEY(faculty_id) REFERENCES faculties(id);
	
/* таблица пользователь */
ALTER TABLE users_roles
	ADD CONSTRAINT FK_users_roles_to_roles FOREIGN KEY(role_id) REFERENCES roles(id),
		ADD CONSTRAINT FK_users_roles_to_users FOREIGN KEY(user_id) REFERENCES users(id);
    
/* таблица телефон */
ALTER TABLE phones
	ADD CONSTRAINT FK_phones_to_users FOREIGN KEY(user_id) REFERENCES users(id);
	
/* таблица информация о пользователе */
ALTER TABLE users_info
    ADD CONSTRAINT FK_users_info_to_users FOREIGN KEY(user_id) REFERENCES users(id),
        ADD CONSTRAINT FK_users_info_to_resources FOREIGN KEY(photo_id) REFERENCES resources(id);

/* таблица преподаватель */
ALTER TABLE teachers
    ADD CONSTRAINT FK_teachers_to_users FOREIGN KEY(id) REFERENCES users(id),
        ADD CONSTRAINT FK_teachers_to_departments FOREIGN KEY(department_id) REFERENCES departments(id),
            ADD CONSTRAINT FK_teachers_to_positions FOREIGN KEY(position_id) REFERENCES positions(id),
                ADD CONSTRAINT FK_teachers_to_academic_degrees FOREIGN KEY(academic_degree_id) REFERENCES academic_degrees(id),
                    ADD CONSTRAINT FK_teachers_to_academic_ranks FOREIGN KEY(academic_rank_id) REFERENCES academic_ranks(id);
							
/* таблица информация о факультете */
ALTER TABLE info_faculties
	ADD CONSTRAINT FK_info_faculties_to_faculties FOREIGN KEY(id) REFERENCES faculties(id);
						
/* таблица группа */
ALTER TABLE `groups`
	ADD CONSTRAINT FK_groups_to_faculties FOREIGN KEY(faculty_id) REFERENCES faculties(id),
	    ADD CONSTRAINT FK_groups_to_specialties FOREIGN KEY(specialty_id) REFERENCES specialties(id),
	        ADD CONSTRAINT FK_groups_to_study_modes FOREIGN KEY(study_mode_id) REFERENCES study_modes(id);
	
/* таблица подгруппа */
ALTER TABLE subgroups
	ADD CONSTRAINT FK_subgroups_to_groups FOREIGN KEY(group_id) REFERENCES `groups`(id);

/* таблица подгруппа и студент */
ALTER TABLE subgroups_students
	ADD CONSTRAINT FK_subgroups_students_to_subgroups FOREIGN KEY(subgroup_id) REFERENCES subgroups(id),
        ADD CONSTRAINT FK_subgroups_students_to_students FOREIGN KEY(student_id) REFERENCES students(id);

/* таблица куратор */
ALTER TABLE curators
	ADD CONSTRAINT FK_curators_to_groups FOREIGN KEY(group_id) REFERENCES `groups`(id),
        ADD CONSTRAINT FK_curators_to_teachers FOREIGN KEY(teacher_id) REFERENCES teachers(id);

/* таблица занятие */
ALTER TABLE lessons
	ADD CONSTRAINT FK_lessons_to_groups FOREIGN KEY(group_id) REFERENCES `groups`(id),
        ADD CONSTRAINT FK_lessons_to_subgroups FOREIGN KEY(subgroup_id) REFERENCES subgroups(id),
            ADD CONSTRAINT FK_lessons_to_teachers FOREIGN KEY(teacher_id) REFERENCES teachers(id),
                ADD CONSTRAINT FK_lessons_to_type FOREIGN KEY(type_id) REFERENCES lesson_types(id),
                    ADD CONSTRAINT FK_lessons_to_lecture_rooms FOREIGN KEY(room_id) REFERENCES lecture_rooms(id),
                        ADD CONSTRAINT FK_lessons_to_disciplines FOREIGN KEY(discipline_id) REFERENCES disciplines(id),  
                             ADD CONSTRAINT FK_lessons_to_lesson_numbers FOREIGN KEY(lesson_number_id) REFERENCES lesson_numbers(id);

/* таблица студент */
ALTER TABLE students
    ADD CONSTRAINT FK_students_to_users FOREIGN KEY(id) REFERENCES users(id),                            
        ADD CONSTRAINT FK_students_to_groups FOREIGN KEY(group_id) REFERENCES `groups`(id);

/* таблица запрос */
ALTER TABLE requests
	ADD CONSTRAINT FK_requests_to_students FOREIGN KEY(student_id) REFERENCES students(id),
		ADD CONSTRAINT FK_requests_to_teachers FOREIGN KEY(teacher_id) REFERENCES teachers(id),
			ADD CONSTRAINT FK_requests_to_statuses FOREIGN KEY(status_id) REFERENCES statuses(id);
			
/* таблица курсовая работа */
ALTER TABLE term_papers
	ADD CONSTRAINT FK_term_papers_to_students FOREIGN KEY(student_id) REFERENCES students(id),
		ADD CONSTRAINT FK_term_papers_to_teachers FOREIGN KEY(teacher_id) REFERENCES teachers(id),
			ADD CONSTRAINT FK_term_papers_to_statuses FOREIGN KEY(status_id) REFERENCES statuses(id),
		        ADD CONSTRAINT FK_term_papers_to_resources FOREIGN KEY(resource_id) REFERENCES resources(id);
			
/* таблица дипломная работа */
ALTER TABLE graduation_papers
	ADD CONSTRAINT FK_graduation_papers_to_students FOREIGN KEY(student_id) REFERENCES students(id),
		ADD CONSTRAINT FK_graduation_papers_to_teachers FOREIGN KEY(teacher_id) REFERENCES teachers(id),
			ADD CONSTRAINT FK_graduation_papers_to_statuses FOREIGN KEY(status_id) REFERENCES statuses(id),
		        ADD CONSTRAINT FK_graduation_papers_to_resources FOREIGN KEY(resource_id) REFERENCES resources(id);
			
/* таблица практика */
ALTER TABLE practices
	ADD CONSTRAINT FK_practices_to_students FOREIGN KEY(student_id) REFERENCES students(id),
		ADD CONSTRAINT FK_practices_to_organizations FOREIGN KEY(organization_id) REFERENCES organizations(id),		
			ADD CONSTRAINT FK_practices_to_statuses FOREIGN KEY(status_id) REFERENCES statuses(id),
		        ADD CONSTRAINT FK_practices_to_resources FOREIGN KEY(resource_id) REFERENCES resources(id),
                    ADD CONSTRAINT FK_practices_to_practice_types FOREIGN KEY(type_id) REFERENCES practice_types(id);

/* таблица roles_urls */
ALTER TABLE roles_urls
	ADD CONSTRAINT FK_roles_urls_to_roles FOREIGN KEY(role_id) REFERENCES roles(id),
        ADD CONSTRAINT FK_roles_urls_to_urls FOREIGN KEY(url_id) REFERENCES urls(id);