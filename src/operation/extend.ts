import { Type } from "@sinclair/typebox";
import { extendOptionsSchema } from "./extend-options.js";

export const extendSchema = Type.Object({
  name: Type.Literal("extend"),
  arg1: extendOptionsSchema
});
