import { Type } from "@sinclair/typebox";

const schema = Type.Union([
  Type.Literal("nearest"),
  Type.Literal("cubic"),
  Type.Literal("mitchell"),
  Type.Literal("lanczos2"),
  Type.Literal("lanczos3")
]);

export default schema;
