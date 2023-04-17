import { Type } from "@sinclair/typebox";

const schema = Type.Union([
  Type.Literal("contain"),
  Type.Literal("cover"),
  Type.Literal("fill"),
  Type.Literal("inside"),
  Type.Literal("outside")
]);

export default schema;
