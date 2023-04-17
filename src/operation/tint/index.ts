import { Type } from "@sinclair/typebox";
import color from "../color.js";

const schema = Type.Object({
  name: Type.Literal("tint"),
  arg1: color
});

export default schema;
