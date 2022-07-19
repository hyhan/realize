type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, U> = T extends U ? never : T

type MyExtrack<T, U> = T extends U ? T : never

type MyOmit<T, K extends keyof any> = Pick<T, MyExclude<keyof T, K>>

type MyNonNullable<T> = T extends null | undefined ? never : T

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

type MyReturnType<T extends (...args: any) => any> = T extends () => infer R ? R : any

type MyInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new () => infer R ? R : any

type MyThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown

type MyOmitThisParameterType<T> = unknown extends MyThisParameterType<T> ? T : T extends (this: any, ...args: infer U) => infer R ? (...args: U) => R : T
