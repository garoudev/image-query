import { Type } from "@sinclair/typebox";
import { extendOptionsSchema } from "./extend-options.js";

export const extendSchema = Type.Object({
  name: Type.Literal("extend"),
  options: extendOptionsSchema
});
