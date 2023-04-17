import { Type } from "@sinclair/typebox";

const schema = Type.Union([
  Type.Literal("nearest"),
  Type.Literal("bilinear"),
  Type.Literal("bicubic"),
  Type.Literal("lbb"),
  Type.Literal("nohalo"),
  Type.Literal("vsqbs")
]);

export default schema;
