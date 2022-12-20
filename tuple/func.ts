type Filter<T extends any[], P, R extends any[] = []> = T extends [
    infer F,
    ...(infer S)
]
    ? F extends P
    ? Filter<S, P, [...R, F]>
    : Filter<S, P, R>
    : R;