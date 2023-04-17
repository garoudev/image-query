import { Type } from "@sinclair/typebox";
import animationOptions from "../animation-options.js";

const schema = Type.Intersect([
  animationOptions,
  Type.Object({
    reuse: Type.Optional(Type.Boolean()),
    progressive: Type.Optional(Type.Boolean()),
    colours: Type.Optional(Type.Number()),
    colors: Type.Optional(Type.Number()),
    effort: Type.Optional(Type.Number()),
    dither: Type.Optional(Type.Number()),
    interFrameMaxError: Type.Optional(Type.Number()),
    interPaletteMaxError: Type.Optional(Type.Number())
  })
]);

export default schema;
