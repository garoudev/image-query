import { Type } from "@sinclair/typebox";
import color from "../color.js";
import extendWith from "./extend-width.js";

const schema = Type.Object({
  top: Type.Optional(Type.Number()),
  left: Type.Optional(Type.Number()),
  bottom: Type.Optional(Type.Number()),
  right: Type.Optional(Type.Number()),
  background: Type.Optional(color),
  extendWith: Type.Optional(extendWith)
});

export default schema;
