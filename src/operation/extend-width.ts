import { Type } from "@sinclair/typebox";

export const extendWithSchema = Type.Union([
  Type.Literal("background"),
  Type.Literal("copy"),
  Type.Literal("repeat"),
  Type.Literal("mirror")
]);
