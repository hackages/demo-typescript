// Type Programming with TypeScript

type User = {
  name: string;
  age?: number;
  email: string;
  details: {
    address: {
      readonly code: string;
      readonly city: string;
    };
  };
};

type Guest = {
  name: string;
  email: string;
};

/**
 * Todo: Make all properties in T optional
 */
export type PPartial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Todo: Make all properties in T required
 */
export type RRequired<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Todo: Make all properties in T readonly
 */
export type RReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Todo: From T, pick a set of properties whose keys are in the union K
 */
export type RPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Todo: Construct a type with a set of properties K of type T
 */
export type RRecord<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Todo: Exclude from T those types that are assignable to U
 */
export type EExclude<T, U> = T extends U ? never : T;

/**
 * Todo: Extract from T those types that are assignable to U
 */
export type EExtract<T, U> = T extends U ? T : never;

/**
 * Todo: Construct a type with the properties of T except for those in type K.
 */
export type OOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Todo: Exclude null and undefined from T
 */
export type NNonNullable<T> = T extends null | undefined ? never : T;
