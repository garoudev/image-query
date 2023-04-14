import { Type } from "@sinclair/typebox";
import { rotateOptionsSchema } from "./rotate-options.js";

export const rotateSchema = Type.Object({
  name: Type.Literal("rotate"),
  arg1: Type.Optional(Type.Number()),
  arg2: rotateOptionsSchema
});
