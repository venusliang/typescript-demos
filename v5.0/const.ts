declare function constfoo<const T>(x: T): T;
declare function foo<T>(x: T): T;

// const foo1: readonly ["a", readonly ["b", "c"]]
const foo1 = constfoo(['a', ['b', 'c']])

// const foo2: (string | string[])[]
const foo2 = foo(['a', ['b', 'c']])

type tt<T extends any[]> = { [K in keyof T]: Awaited<T[K]> }

declare function PromiseAll<const T extends readonly unknown[]>(values: T): Promise<{ [K in keyof T]: Awaited<T[K]> }>;

const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);


declare function bar(s: number): number

enum E {
    A = 10 * 10,  // Numeric literal enum member
    B = "foo",    // String literal enum member
    C = bar(42)   // Opaque computed enum member
}

type te = typeof E

type tun = te extends E.A | E.B | E.C ? 1 : 2