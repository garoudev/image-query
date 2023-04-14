import { Type } from "@sinclair/typebox";
import { resizeOptionsSchema } from "./resize-options.js";

export const resizeSchema = Type.Object({
  name: Type.Literal("resize"),
  arg1: resizeOptionsSchema
});
