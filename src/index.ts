import { Type } from "@sinclair/typebox";
import { TypeCompiler, ValueErrorType } from "@sinclair/typebox/compiler";
import { formatSchema } from "./format/index.js";
import { operationSchema } from "./operation/index.js";

import type { Static } from "@sinclair/typebox";
import type { ValueError } from "@sinclair/typebox/compiler";

export const sharpQuerySchema = Type.Object({
  format: formatSchema,
  operations: Type.Array(operationSchema)
});

export type SharpQuery = Static<typeof sharpQuerySchema>;
export type Operation = Static<typeof operationSchema>;
export type Format = Static<typeof formatSchema>;

const schemaValidator = TypeCompiler.Compile(sharpQuerySchema);

export type ToSharpQueryResult =
  | {
      query: SharpQuery;
    }
  | {
      errors: ValueError[];
    };

export function toSharpQuery(value: string): ToSharpQueryResult {
  let query: unknown;
  try {
    query = JSON.parse(value);
  } catch (e) {
    return {
      errors: [
        {
          type: ValueErrorType.Custom,
          schema: sharpQuerySchema,
          path: "",
          value,
          message: "Not a valid JSON"
        }
      ]
    };
  }
  const errors = [...schemaValidator.Errors(query)];
  if (errors.length > 0) {
    return { errors };
  }
  return { query: query as SharpQuery };
}
