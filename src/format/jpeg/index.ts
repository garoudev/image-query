import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  format: Type.Union([Type.Literal("jpeg"), Type.Literal("jpg")]),
  options
});

export default schema;
