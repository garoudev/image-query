import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  lower: Type.Optional(Type.Number()),
  upper: Type.Optional(Type.Number())
});

export default schema;
