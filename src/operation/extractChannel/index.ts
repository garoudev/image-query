import { Type } from "@sinclair/typebox";
import channel from "./channel.js";

const schema = Type.Object({
  name: Type.Literal("extractChannel"),
  arg1: channel
});

export default schema;
