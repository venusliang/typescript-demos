type SubKeys<T, K extends string | number> = K extends keyof T ? `${K}${ObjectKeyPaths<T[K], ".">}` : never;

type ObjectKeyPaths<T, P extends string = "", K extends string | number = Extract<keyof T, T extends any[] ? number : string>> =
    object extends T ? string :
    T extends any[] ? `${P}${K}` | `${P}[${K}]` | `[${K}]` | `${P}${SubKeys<T, K>}` :
    T extends object ? `${P}${K}` | `${P}${SubKeys<T, K>}` :
    never;
