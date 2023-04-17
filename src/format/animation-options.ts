import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  loop: Type.Optional(Type.Number()),
  delay: Type.Optional(Type.Union([Type.Number(), Type.Array(Type.Number())]))
});

export default schema;
