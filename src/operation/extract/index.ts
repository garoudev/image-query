import { Type } from "@sinclair/typebox";
import region from "../region.js";

const schema = Type.Object({
  name: Type.Literal("extract"),
  arg1: region
});

export default schema;
