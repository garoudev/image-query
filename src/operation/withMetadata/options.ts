import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  orientation: Type.Optional(Type.Number()),
  icc: Type.Optional(Type.String()),
  exif: Type.Optional(Type.Record(Type.String(), Type.Any())),
  density: Type.Optional(Type.Number())
});

export default schema;
