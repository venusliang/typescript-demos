type Fizz = [any, any, any];
type Buzz = [any, any, any, any, any];

type IsFizzBuzz<T extends any[], F extends any[], B extends any[], R extends string = ""> = T extends F
    ? IsFizzBuzz<T, [...F, ...Fizz], B, 'Fizz'>
    : T extends B
    ? [F, [...B, ...Buzz], `${R}Buzz`]
    : [F, B, R extends '' ? `${T['length']}` : R];

type FizzBuzz<N extends number,
    T extends any[] = [any],
    F extends any[] = Fizz,
    B extends any[] = Buzz,
    R extends any[] = []> = IsFizzBuzz<T, F, B> extends [infer F1 extends any[], infer B1 extends any[], infer R2]
    ? (T['length'] extends N ? [...R, R2] : FizzBuzz<N, [...T, any], F1, B1, [...R, R2]>)
    : never;

type fb1 = FizzBuzz<1>
type fb2 = FizzBuzz<2>
type fb3 = FizzBuzz<1000>