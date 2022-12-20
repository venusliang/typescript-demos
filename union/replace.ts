type ReplaceChild<T, S extends [any, any][]> = {
    [K in keyof S]: T extends S[K][0] ? S[K][1] : never
}[number];

type Replace<T, S extends [any, any][], C = ReplaceChild<T, S>> = (() => C) extends (() => never) ? T : C;

type UnionReplace<T, U extends [any, any][]> = T extends any ? Replace<T, U> : never;

type u22 = UnionReplace<
    Function | Date | object,
    [[Date, string], [Function, undefined]]
>

type rr2 = Replace<object, [[Date, string], [Function, undefined]]>

type tttt = Date extends object ? 1 : 2