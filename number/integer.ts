type Integer<T> = number extends T ? never : T extends number
    ? `${T}` extends `${number}.${string}`
    ? never
    : T
    : never;