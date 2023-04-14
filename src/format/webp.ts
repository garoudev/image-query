import { Type } from "@sinclair/typebox";
import { webpOptionsSchema } from "./webp-options.js";

export const webpSchema = Type.Object({
  format: Type.Literal("webp"),
  options: webpOptionsSchema
});
