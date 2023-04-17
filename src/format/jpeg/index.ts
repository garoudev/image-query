import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Union([Type.Literal("jpeg"), Type.Literal("jpg")]),
  options: Type.Optional(options)
});

export default schema;
