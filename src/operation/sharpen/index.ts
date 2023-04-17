import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("sharpen"),
  arg1: Type.Optional(options)
});

export default schema;
