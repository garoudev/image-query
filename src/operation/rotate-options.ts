import { Type } from "@sinclair/typebox";
import { ColorSchema } from "./color.js";

export const rotateOptionsSchema = Type.Object({
  background: Type.Optional(ColorSchema)
});
