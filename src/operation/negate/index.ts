import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("negate"),
  arg1: Type.Optional(options)
});

export default schema;
