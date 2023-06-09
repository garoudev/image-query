import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  left: Type.Number(),
  top: Type.Number(),
  width: Type.Number(),
  height: Type.Number()
});

export default schema;
