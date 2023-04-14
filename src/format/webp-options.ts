import { Type } from "@sinclair/typebox";
import { animationOptionsSchema } from "./animation-options.js";

export const webpOptionsSchema = Type.Intersect([
  animationOptionsSchema,
  Type.Object({
    quality: Type.Optional(Type.Number()),
    alphaQuality: Type.Optional(Type.Number()),
    lossless: Type.Optional(Type.Boolean()),
    nearLossless: Type.Optional(Type.Boolean()),
    smartSubsample: Type.Optional(Type.Boolean()),
    effort: Type.Optional(Type.Number()),
    minSize: Type.Optional(Type.Number()),
    mixed: Type.Optional(Type.Boolean())
  })
]);
