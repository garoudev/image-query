import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("threshold"),
  arg1: Type.Optional(Type.Number()),
  arg2: Type.Optional(options)
});

export default schema;
