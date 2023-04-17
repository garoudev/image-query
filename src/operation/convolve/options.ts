import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  width: Type.Number(),
  height: Type.Number(),
  kernel: Type.Array(Type.Number()),
  scale: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
});

export default schema;
