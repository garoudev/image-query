import { Type } from "@sinclair/typebox";
import color from "../color.js";
import fitEnum from "./fit-enum.js";
import kernelEnum from "./kernel-enum.js";

const optionalSchema = Type.Object({
  fit: Type.Optional(fitEnum),
  position: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  background: Type.Optional(color),
  kernel: Type.Optional(kernelEnum),
  withoutEnlargement: Type.Optional(Type.Boolean()),
  withoutReduction: Type.Optional(Type.Boolean()),
  fastShrinkOnLoad: Type.Optional(Type.Boolean())
});

const baseSchema = Type.Union([
  Type.Object({ width: Type.Number() }),
  Type.Object({ height: Type.Number() }),
  Type.Object({ width: Type.Number(), height: Type.Number() })
]);

const schema = Type.Intersect([baseSchema, optionalSchema]);

export default schema;
