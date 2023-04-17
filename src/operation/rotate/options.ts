import { Type } from "@sinclair/typebox";
import color from "../color.js";

const schema = Type.Object({
  background: Type.Optional(color)
});

export default schema;
