/* таблица аудитории */
ALTER TABLE lecture_rooms

    ADD CONSTRAINT FK_lecture_rooms_to_room_types FOREIGN KEY (room_type_id)    
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

    ADD CONSTRAINT FK_departments_to_users FOREIGN KEY(owner_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_departments_to_lecture_rooms FOREIGN KEY(lecture_room_id)
		REFERENCES lecture_rooms(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_departments_to_faculties FOREIGN KEY(faculty_id)
		REFERENCES faculties(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

	
/* таблица пользователь */
ALTER TABLE users_roles

	ADD CONSTRAINT FK_users_roles_to_roles FOREIGN KEY(role_id)
		REFERENCES roles(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
	
	ADD CONSTRAINT FK_users_roles_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT
;

    
/* таблица телефон */
ALTER TABLE phones

	ADD CONSTRAINT FK_phones_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
;

	
/* таблица информация о пользователе */
ALTER TABLE users_info

    ADD CONSTRAINT FK_users_info_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,

    ADD CONSTRAINT FK_users_info_to_resources FOREIGN KEY(photo_id)
		REFERENCES resources(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица преподаватель */
ALTER TABLE teachers

    ADD CONSTRAINT FK_teachers_to_users FOREIGN KEY(id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
		
    ADD CONSTRAINT FK_teachers_to_departments FOREIGN KEY(department_id)
		REFERENCES departments(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

    ADD CONSTRAINT FK_teachers_to_academic_degrees FOREIGN KEY(academic_degree_id)
		REFERENCES academic_degrees(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_teachers_to_academic_ranks FOREIGN KEY(academic_rank_id)
		REFERENCES academic_ranks(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица должности преподавателей */
ALTER TABLE "teachers_positions"

	ADD CONSTRAINT FK_teachers_positions_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_teachers_positions_to_positions FOREIGN KEY(position_id)
		REFERENCES positions(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

							
/* таблица информация о факультете */
ALTER TABLE info_faculties

	ADD CONSTRAINT FK_info_faculties_to_faculties FOREIGN KEY(faculty_id)
		REFERENCES faculties(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
;

						
/* таблица группа */
ALTER TABLE groups

	ADD CONSTRAINT FK_groups_to_faculties FOREIGN KEY(faculty_id)
		REFERENCES faculties(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_groups_to_specialties FOREIGN KEY(specialty_id)
		REFERENCES specialties(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_groups_to_study_modes FOREIGN KEY(study_mode_id)
		REFERENCES study_modes(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

	
/* таблица подгруппа */
ALTER TABLE subgroups

	ADD CONSTRAINT FK_subgroups_to_groups FOREIGN KEY(group_id)
		REFERENCES "groups"(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица подгруппа и студент */
ALTER TABLE students_subgroups

	ADD CONSTRAINT FK_students_subgroups_to_subgroups FOREIGN KEY(subgroup_id)
		REFERENCES subgroups(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_students_subgroups_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица куратор */
ALTER TABLE curators

	ADD CONSTRAINT FK_curators_to_groups FOREIGN KEY(group_id)
		REFERENCES "groups"(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_curators_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица занятие */
ALTER TABLE lessons

	ADD CONSTRAINT FK_lessons_to_groups FOREIGN KEY(group_id)
		REFERENCES "groups"(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
	
	ADD CONSTRAINT FK_lessons_to_subgroups FOREIGN KEY(subgroup_id)
		REFERENCES subgroups(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
	
	ADD CONSTRAINT FK_lessons_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_lessons_to_lesson_types FOREIGN KEY(lesson_type_id)
		REFERENCES lesson_types(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
                    
	ADD CONSTRAINT FK_lessons_to_lecture_rooms FOREIGN KEY(lecture_room_id)
		REFERENCES lecture_rooms(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_lessons_to_disciplines FOREIGN KEY(discipline_id)
		REFERENCES disciplines(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
		
	ADD CONSTRAINT FK_lessons_to_lesson_numbers FOREIGN KEY(lesson_number_id)
		REFERENCES lesson_numbers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица студент */
ALTER TABLE students

    ADD CONSTRAINT FK_students_to_users FOREIGN KEY(id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_students_to_groups FOREIGN KEY(group_id)
		REFERENCES "groups"(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица запрос */
ALTER TABLE requests

	ADD CONSTRAINT FK_requests_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_requests_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_requests_to_statuses FOREIGN KEY(status_id)
		REFERENCES statuses(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

			
/* таблица курсовая работа */
ALTER TABLE term_papers

	ADD CONSTRAINT FK_term_papers_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_term_papers_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_term_papers_to_statuses FOREIGN KEY(status_id)
		REFERENCES statuses(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT/*,

	ADD CONSTRAINT FK_term_papers_to_resources FOREIGN KEY(resource_id)
		REFERENCES resources(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT*/
;

			
/* таблица дипломная работа */
ALTER TABLE graduation_papers

	ADD CONSTRAINT FK_graduation_papers_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_graduation_papers_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_graduation_papers_to_statuses FOREIGN KEY(status_id)
		REFERENCES statuses(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT/*,

	ADD CONSTRAINT FK_graduation_papers_to_resources FOREIGN KEY(resource_id)
		REFERENCES resources(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT*/
;

			
/* таблица практика */
ALTER TABLE practices

	ADD CONSTRAINT FK_practices_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_practices_to_organizations FOREIGN KEY(organization_id)
		REFERENCES organizations(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_practices_to_statuses FOREIGN KEY(status_id)
		REFERENCES statuses(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	/*ADD CONSTRAINT FK_practices_to_resources FOREIGN KEY(resource_id)
		REFERENCES resources(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,*/

	ADD CONSTRAINT FK_practices_to_practice_types FOREIGN KEY(practice_type_id)
		REFERENCES practice_types(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица roles_control_points */
ALTER TABLE roles_control_points

	ADD CONSTRAINT FK_roles_control_points_to_roles FOREIGN KEY(role_id)
		REFERENCES roles(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_roles_control_points_to_control_points FOREIGN KEY(control_point_id)
		REFERENCES control_points(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

ALTER TABLE disciplines

	ADD CONSTRAINT FK_disciplines_to_specialties FOREIGN KEY(specialty_id)
		REFERENCES specialties(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

ALTER TABLE staffs

	ADD CONSTRAINT FK_staffs_to_teachers FOREIGN KEY(teacher_id)
		REFERENCES teachers(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

ALTER TABLE time_sheets

	ADD CONSTRAINT FK_time_sheets_to_disciplines FOREIGN KEY(discipline_id)
		REFERENCES disciplines(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
	
	ADD CONSTRAINT FK_time_sheets_to_staffs FOREIGN KEY(staff_id)
		REFERENCES staffs(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;