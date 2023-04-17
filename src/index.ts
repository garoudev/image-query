import { Type } from "@sinclair/typebox";
import { TypeCompiler, ValueErrorType } from "@sinclair/typebox/compiler";
import format from "./format/index.js";
import operation from "./operation/index.js";

import type { Static } from "@sinclair/typebox";
import type { ValueError } from "@sinclair/typebox/compiler";

const schema = Type.Object({
  format,
  operations: Type.Array(operation)
});

export default schema;
export type ImageQuery = Static<typeof schema>;
export type Operation = Static<typeof operation>;
export type Format = Static<typeof format>;

const schemaValidator = TypeCompiler.Compile(schema);

export type ToImageQueryResult =
  | {
      query: ImageQuery;
    }
  | {
      errors: ValueError[];
    };

export function isImageQuery(value: unknown): ToImageQueryResult {
  const errors = [...schemaValidator.Errors(value)];
  if (errors.length > 0) {
    return { errors };
  }
  return { query: value as ImageQuery };
}

export function toImageQuery(value: string): ToImageQueryResult {
  let query: unknown;
  try {
    query = JSON.parse(value);
  } catch (e) {
    return {
      errors: [
        {
          type: ValueErrorType.Custom,
          schema,
          path: "",
          value,
          message: "Not a valid JSON"
        }
      ]
    };
  }
  return isImageQuery(query);
}
