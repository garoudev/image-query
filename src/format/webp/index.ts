import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  format: Type.Literal("webp"),
  options
});

export default schema;
