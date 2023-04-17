import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Literal("linear"),
  arg1: Type.Optional(Type.Union([Type.Number(), Type.Array(Type.Number())])),
  arg2: Type.Optional(Type.Union([Type.Number(), Type.Array(Type.Number())]))
});

export default schema;
