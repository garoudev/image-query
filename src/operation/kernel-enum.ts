import { Type } from "@sinclair/typebox";

export const kernelEnumSchema = Type.Union([
  Type.Literal("nearest"),
  Type.Literal("cubic"),
  Type.Literal("mitchell"),
  Type.Literal("lanczos2"),
  Type.Literal("lanczos3")
]);
