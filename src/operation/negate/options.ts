import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  alpha: Type.Optional(Type.Boolean())
});

export default schema;
