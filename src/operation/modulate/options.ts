import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  brightness: Type.Optional(Type.Number()),
  saturation: Type.Optional(Type.Number()),
  hue: Type.Optional(Type.Number()),
  lightness: Type.Optional(Type.Number())
});

export default schema;
