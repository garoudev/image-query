import { Type } from "@sinclair/typebox";

const schema = Type.Union([
  Type.Literal("background"),
  Type.Literal("copy"),
  Type.Literal("repeat"),
  Type.Literal("mirror")
]);

export default schema;
