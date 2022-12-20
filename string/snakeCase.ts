
type SnakeCase<S extends string, C extends string = ''> = S extends `${infer F}${infer O}`
    ? (`${Capitalize<F> extends F
        ? `${C}${Lowercase<F>}`
        : F}${SnakeCase<O, '_'>}`)
    : S;

type tttt213 = SnakeCase<'getElementById' | 'getElementByClassNames'>;