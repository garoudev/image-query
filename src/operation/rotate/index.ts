import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("rotate"),
  arg1: Type.Optional(Type.Number()),
  arg2: options
});

export default schema;
