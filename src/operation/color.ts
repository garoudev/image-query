import { Type } from "@sinclair/typebox";

export const RGBASchema = Type.Object({
  r: Type.Optional(Type.Number()),
  g: Type.Optional(Type.Number()),
  b: Type.Optional(Type.Number()),
  alpha: Type.Optional(Type.Number())
});

export const ColorSchema = Type.Union([Type.String(), RGBASchema]);
