import { Type } from "@sinclair/typebox";
import { fitEnumSchema } from "./fit-enum.js";
import { ColorSchema } from "./color.js";
import { kernelEnumSchema } from "./kernel-enum.js";

const optionalSchema = Type.Object({
  fit: Type.Optional(fitEnumSchema),
  position: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  background: Type.Optional(ColorSchema),
  kernel: Type.Optional(kernelEnumSchema),
  withoutEnlargement: Type.Optional(Type.Boolean()),
  withoutReduction: Type.Optional(Type.Boolean()),
  fastShrinkOnLoad: Type.Optional(Type.Boolean())
});

const baseSchema = Type.Union([
  Type.Object({ width: Type.Number() }),
  Type.Object({ height: Type.Number() }),
  Type.Object({ width: Type.Number(), height: Type.Number() })
]);

export const resizeOptionsSchema = Type.Intersect([baseSchema, optionalSchema]);
