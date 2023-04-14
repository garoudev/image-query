import { Type } from "@sinclair/typebox";
import { jpegOptionsSchema } from "./jpeg-options.js";

export const jpegSchema = Type.Object({
  format: Type.Union([Type.Literal("jpeg"), Type.Literal("jpg")]),
  options: jpegOptionsSchema
});
