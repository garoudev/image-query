import { Type } from "@sinclair/typebox";

export const fitEnumSchema = Type.Union([
  Type.Literal("contain"),
  Type.Literal("cover"),
  Type.Literal("fill"),
  Type.Literal("inside"),
  Type.Literal("outside")
]);
