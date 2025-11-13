import { writable } from 'svelte/store';
import type { RegistryData, StudentData, TeacherData } from '../../types/types';

export const registryStore = writable<RegistryData>({
	students: [],
	teachers: []
});

export function addStudent(student: StudentData) {
	console.log('Adding student:', student);
	registryStore.update((data) => ({
		...data,
		students: [...data.students, student]
	}));
}

export function addTeacher(teacher: TeacherData) {
	registryStore.update((data) => ({
		...data,
		teachers: [...data.teachers, teacher]
	}));
}

function loadFromStorage(): RegistryData {
	const storedData = localStorage.getItem('registryStore');
	if (storedData) {
		return JSON.parse(storedData) as RegistryData;
	}
	return { students: [], teachers: [] };
}
