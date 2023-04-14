import { Type } from "@sinclair/typebox";
import { trimOptionsSchema } from "./trim-options.js";

export const trimSchema = Type.Object({
  name: Type.Literal("trim"),
  options: trimOptionsSchema
});
