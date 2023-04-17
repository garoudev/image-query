import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  format: Type.Literal("gif"),
  options
});

export default schema;
