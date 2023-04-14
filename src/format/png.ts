import { Type } from "@sinclair/typebox";
import { pngOptionsSchema } from "./png-options.js";

export const pngSchema = Type.Object({
  format: Type.Literal("png"),
  options: pngOptionsSchema
});
