import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Union([Type.Literal("grayscale"), Type.Literal("greyscale")]),
  arg1: Type.Optional(Type.Boolean())
});

export default schema;
