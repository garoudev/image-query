import { Type } from "@sinclair/typebox";

export const regionSchema = Type.Object({
  left: Type.Number(),
  top: Type.Number(),
  width: Type.Number(),
  height: Type.Number()
});
