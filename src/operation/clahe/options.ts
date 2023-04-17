import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  width: Type.Number(),
  height: Type.Number(),
  maxSlope: Type.Optional(Type.Number())
});

export default schema;
