/* таблица кафедра */
ALTER TABLE departments

	ADD CONSTRAINT FK_departments_to_users FOREIGN KEY(owner_id)
		REFERENCES users(id)
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
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

    
/* таблица телефон */
ALTER TABLE phones

	ADD CONSTRAINT FK_phones_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

	
/* таблица информация о пользователе */
ALTER TABLE users_info

  ADD CONSTRAINT FK_users_info_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,
	
	ADD CONSTRAINT FK_users_info_to_cities FOREIGN KEY(city_id)
		REFERENCES cities(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица информация о факультете */
ALTER TABLE info_faculties

	ADD CONSTRAINT FK_info_faculties_to_faculties FOREIGN KEY(faculty_id)
		REFERENCES faculties(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;


/* таблица студент */
ALTER TABLE students

  ADD CONSTRAINT FK_students_to_users FOREIGN KEY(user_id)
		REFERENCES users(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

	ADD CONSTRAINT FK_students_to_groups FOREIGN KEY(group_id)
		REFERENCES groups(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

/* таблица информация о студенте */
ALTER TABLE students_info

  ADD CONSTRAINT FK_students_info_to_students FOREIGN KEY(student_id)
		REFERENCES students(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

  ADD CONSTRAINT FK_students_info_to_finished_educations FOREIGN KEY(finished_education_id)
		REFERENCES finished_educations(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT,

  ADD CONSTRAINT FK_students_info_to_cities FOREIGN KEY(city_id)
		REFERENCES cities(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
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

/* таблица города */
ALTER TABLE cities

  ADD CONSTRAINT FK_cities_to_regions FOREIGN KEY(region_id)
		REFERENCES regions(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;

/* таблица регионы (области) */
ALTER TABLE regions

  ADD CONSTRAINT FK_regions_to_countries FOREIGN KEY(country_id)
		REFERENCES countries(id)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
;