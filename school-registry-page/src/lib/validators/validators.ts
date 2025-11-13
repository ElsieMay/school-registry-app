export function validateField(value: string | number) {
	return value !== '' && value !== null && value !== undefined && value !== 0;
}

export function validateAge(age: number): boolean {
	return validateField(age) && age > 0 && age < 120 && Number.isInteger(age);
}

export function validateClass(className: string) {
	const classPattern = /^[A-Za-z0-9\s]+$/;
	return classPattern.test(className);
}

export function validateName(name: string) {
	const namePattern = /^[A-Za-z\s'-]+$/;
	return namePattern.test(name);
}
