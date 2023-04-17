import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Literal("removeAlpha")
});

export default schema;
