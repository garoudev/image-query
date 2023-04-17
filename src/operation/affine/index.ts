import { Type } from "@sinclair/typebox";
import matrix2 from "./matrix2.js";
import options from "./options.js";

const schema = Type.Object({
  name: Type.Literal("affine"),
  arg1: matrix2,
  arg2: Type.Optional(options)
});

export default schema;
