type Last<T extends any[]> = T extends [...any, infer T] ? T : never;

type Head<T extends any[]> = T extends [infer T, ...any] ? T : never;
