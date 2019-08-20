export const importToArray = <Key extends string, PropType>(importObject: Record<Key, PropType>): PropType[] =>
	(Object.getOwnPropertyNames(importObject) as Key[]).filter(key => key.indexOf('__') !== 0).map(key => importObject[key]);
