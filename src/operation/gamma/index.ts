import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Literal("gamma"),
  arg1: Type.Optional(Type.Number()),
  arg2: Type.Optional(Type.Number())
});

export default schema;
