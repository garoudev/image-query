import { Type } from "@sinclair/typebox";
import { ColorSchema } from "./color.js";
import { extendWithSchema } from "./extend-width.js";

export const extendOptionsSchema = Type.Object({
  top: Type.Optional(Type.Number()),
  left: Type.Optional(Type.Number()),
  bottom: Type.Optional(Type.Number()),
  right: Type.Optional(Type.Number()),
  background: Type.Optional(ColorSchema),
  extendWith: Type.Optional(extendWithSchema)
});
