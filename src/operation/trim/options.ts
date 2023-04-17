import { Type } from "@sinclair/typebox";
import color from "../color.js";

const schema = Type.Object({
  background: Type.Optional(color),
  threshold: Type.Optional(Type.Number())
});

export default schema;
