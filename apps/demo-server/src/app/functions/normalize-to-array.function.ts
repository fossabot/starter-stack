export const normalizeToArray = <T = string>(value: T | T[]): T[] => {
	if (value !== undefined && Array.isArray(value)) {
		return value;
	} else return [value];
};
