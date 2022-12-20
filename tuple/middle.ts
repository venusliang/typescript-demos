
export type GetMiddleElement<T, R extends any[] = []> = T extends []
    ? []
    : T extends [...R, infer M, ...R]
    ? [M]
    : T extends [...R, infer M1, infer M2, ...R]
    ? [M1, M2]
    : GetMiddleElement<T, [...R, any]>;
