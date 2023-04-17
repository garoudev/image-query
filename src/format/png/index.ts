import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("png"),
  options: Type.Optional(options)
});

export default schema;
