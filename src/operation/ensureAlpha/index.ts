import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Literal("ensureAlpha"),
  arg1: Type.Optional(Type.Number())
});

export default schema;
