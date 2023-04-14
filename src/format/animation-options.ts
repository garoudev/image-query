import { Type } from "@sinclair/typebox";

export const animationOptionsSchema = Type.Object({
  loop: Type.Optional(Type.Number()),
  delay: Type.Optional(Type.Union([Type.Number(), Type.Array(Type.Number())]))
});
