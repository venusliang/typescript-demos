type Path<T, P extends any[] = []> = Exclude<{
    [K in keyof T]: T[K] extends any[] ? P | Path<T[K], [...P, K]> : T[K] extends object ? P | Path<T[K], [...P, K]> : P | [...P, K]
}[keyof T], []>;

type Path1<T, P extends any[] = [], K extends keyof T = keyof T> = K extends any ? [...P, K] | (
    T[K] extends object ? Path1<T[K], [...P, K]> : never
) : never;

type patht1 = Path1<{
    foo: {
        bar: {
            a: string
        }
        baz: {
            b: number
            c: number
        }
    }
}>

type t1 = '1' | '2'

type t222<T> = T extends T ? [T] : 22

type t123 = t222<t1>