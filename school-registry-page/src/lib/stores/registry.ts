import type { RegistryData, StudentData, TeacherData } from '../../types/types';

let registryData: RegistryData = {
	students: [
		{ firstName: 'John', lastName: 'Name', class: '2A', age: 7 },
		{ firstName: 'Sarah', lastName: 'Name', class: '3B', age: 8 },
		{ firstName: 'Afshin', lastName: 'Name', class: '6H', age: 11 }
	],
	teachers: [
		{ firstName: 'Mr.', lastName: 'Name', subject: 'Mathematics' },
		{ firstName: 'Mrs.', lastName: 'Name', subject: 'English' },
		{ firstName: 'Mr.', lastName: 'Name', subject: 'Science' }
	]
};

export function getRegistryData(): RegistryData {
	return registryData;
}

export function addStudent(student: StudentData): void {
	registryData.students.push(student);
}

export function addTeacher(teacher: TeacherData): void {
	registryData.teachers.push(teacher);
}
