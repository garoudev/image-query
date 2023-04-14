import { Type } from "@sinclair/typebox";
import { ColorSchema } from "./color.js";

export const trimOptionsSchema = Type.Object({
  background: Type.Optional(ColorSchema),
  threshold: Type.Optional(Type.Number())
});
