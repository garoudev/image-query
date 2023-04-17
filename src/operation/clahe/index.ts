import { Type } from "@sinclair/typebox";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("clahe"),
  arg1: options
});

export default schema;
