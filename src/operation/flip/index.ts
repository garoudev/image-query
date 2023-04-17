import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Literal("flip"),
  arg1: Type.Optional(Type.Boolean())
});

export default schema;
