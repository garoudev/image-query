import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Union([Type.Literal("normalize"), Type.Literal("normalise")]),
  arg1: Type.Optional(options)
});

export default schema;
