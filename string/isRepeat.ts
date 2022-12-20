type IsRepat<S extends string, T extends string> = S extends `${string}${infer F1 extends T}${string}${infer F1 extends T}${string}` ? 1 : -1;

type r1 = IsRepat<"ads", "a">;

//  https://github.com/type-challenges/type-challenges/blob/main/questions/09286-medium-firstuniquecharindex/README.md
type FirstUniqueCharIndex<T extends string, N extends string = T, R extends unknown[] = []> = T extends '' ? -1 :
    (N extends `${infer F1}${infer S}` ?
        (T extends `${string}${F1}${string}${F1}${string}` ? FirstUniqueCharIndex<T, S, [...R, unknown]> : R['length']) :
        -1
    );

type f1 = FirstUniqueCharIndex<'leetcode'>
type f2 = FirstUniqueCharIndex<'loveleetcode'>
type f3 = FirstUniqueCharIndex<'aabb'>
type f4 = FirstUniqueCharIndex<''>