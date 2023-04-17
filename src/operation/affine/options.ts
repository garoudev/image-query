import { Type } from "@sinclair/typebox";
import color from "../color.js";
import iterpolators from "./iterpolators.js";

const schema = Type.Object({
  background: Type.Optional(color),
  idx: Type.Optional(Type.Number()),
  idy: Type.Optional(Type.Number()),
  odx: Type.Optional(Type.Number()),
  ody: Type.Optional(Type.Number()),
  iterpolators: Type.Optional(iterpolators)
});

export default schema;
