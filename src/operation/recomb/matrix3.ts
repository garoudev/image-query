import { Type } from "@sinclair/typebox";

import type {
  ArrayOptions,
  Static,
  TArray,
  TNumber,
  TSchema
} from "@sinclair/typebox";

export interface TArray3<T extends TSchema = TSchema>
  extends TArray<T>,
    ArrayOptions {
  static: [
    Static<T, this["params"]>,
    Static<T, this["params"]>,
    Static<T, this["params"]>
  ];
}

const matrixItem = Type.Array(Type.Number(), {
  maxItems: 3,
  minItems: 3
}) as unknown as TArray3<TNumber>;

const schema = Type.Array(matrixItem, {
  maxItems: 3,
  minItems: 3
}) as unknown as TArray3<TArray3<TNumber>>;

export default schema;
