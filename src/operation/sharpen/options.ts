import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  sigma: Type.Number(),
  m1: Type.Optional(Type.Number()),
  m2: Type.Optional(Type.Number()),
  x1: Type.Optional(Type.Number()),
  y2: Type.Optional(Type.Number()),
  y3: Type.Optional(Type.Number())
});

export default schema;
