import { Type } from "@sinclair/typebox";
import { resizeSchema } from "./resize.js";
import { extendSchema } from "./extend.js";
import { extractSchema } from "./extract.js";
import { trimSchema } from "./trim.js";

export const operationSchema = Type.Union([
  resizeSchema,
  extendSchema,
  extractSchema,
  trimSchema
]);
