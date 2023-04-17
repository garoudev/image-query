import { Type } from "@sinclair/typebox";

const schema = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
  Type.Literal(2),
  Type.Literal(3),
  Type.Literal("red"),
  Type.Literal("green"),
  Type.Literal("blue"),
  Type.Literal("alpha")
]);

export default schema;
