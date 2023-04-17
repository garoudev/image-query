import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  greyscale: Type.Optional(Type.Boolean()),
  grayscale: Type.Optional(Type.Boolean())
});

export default schema;
