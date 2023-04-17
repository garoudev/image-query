import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Union([
    Type.Literal("toColorspace"),
    Type.Literal("toColourspace")
  ]),
  arg1: Type.String()
});

export default schema;
