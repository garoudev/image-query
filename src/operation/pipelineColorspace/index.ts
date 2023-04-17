import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  name: Type.Union([
    Type.Literal("pipelineColorspace"),
    Type.Literal("pipelineColourspace")
  ]),
  arg1: Type.Optional(Type.String())
});

export default schema;
