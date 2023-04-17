import { Type } from "@sinclair/typebox";

import type {
  ArrayOptions,
  Static,
  TArray,
  TNumber,
  TSchema
} from "@sinclair/typebox";

export interface TArray2<T extends TSchema = TSchema>
  extends TArray<T>,
    ArrayOptions {
  static: [Static<T, this["params"]>, Static<T, this["params"]>];
}

export interface TArray4<T extends TSchema = TSchema>
  extends TArray<T>,
    ArrayOptions {
  static: [
    Static<T, this["params"]>,
    Static<T, this["params"]>,
    Static<T, this["params"]>,
    Static<T, this["params"]>
  ];
}

const numberArray = Type.Array(Type.Number(), {
  maxItems: 4,
  minItems: 4
}) as unknown as TArray4<TNumber>;

const matrixItem = Type.Array(Type.Number(), {
  maxItems: 2,
  minItems: 2
}) as unknown as TArray2<TNumber>;

const matrixArray = Type.Array(matrixItem, {
  maxItems: 2,
  minItems: 2
}) as unknown as TArray2<TArray2<TNumber>>;

const schema = Type.Union([numberArray, matrixArray]);

export default schema;
