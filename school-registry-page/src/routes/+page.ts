export const prerender = true;

import type { RegistryData, StudentData, TeacherData } from '../types/types';

const students: StudentData[] = [
	{ firstName: 'John', lastName: 'Name', class: '2A', age: 7 },
	{ firstName: 'Sarah', lastName: 'Name', class: '3B', age: 8 },
	{ firstName: 'Afshin', lastName: 'Name', class: '6H', age: 11 }
];

const teachers: TeacherData[] = [
	{ firstName: 'Mr.', lastName: 'Name', subject: 'Mathematics' },
	{ firstName: 'Mrs.', lastName: 'Name', subject: 'English' },
	{ firstName: 'Mr.', lastName: 'Name', subject: 'Science' }
];

export function load(): RegistryData {
	return {
		students,
		teachers
	};
}
