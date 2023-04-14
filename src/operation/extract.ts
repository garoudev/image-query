import { Type } from "@sinclair/typebox";
import { regionSchema } from "./region.js";

export const extractSchema = Type.Object({
  name: Type.Literal("extract"),
  arg1: regionSchema
});
