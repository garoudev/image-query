import { Type } from "@sinclair/typebox";
import matrix3 from "./matrix3.js";

const schema = Type.Object({
  name: Type.Literal("recomb"),
  arg1: matrix3
});

export default schema;
