type StrToNum<S> = S extends `${infer F1 extends number}` ? F1 : never;

type s1 = StrToNum<"123">;