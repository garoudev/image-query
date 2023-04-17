import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  r: Type.Optional(Type.Number()),
  g: Type.Optional(Type.Number()),
  b: Type.Optional(Type.Number()),
  alpha: Type.Optional(Type.Number())
});

export default schema;
