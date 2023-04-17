import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  progressive: Type.Optional(Type.Boolean()),
  compressionLevel: Type.Optional(Type.Number()),
  adaptiveFiltering: Type.Optional(Type.Boolean()),
  quality: Type.Optional(Type.Number()),
  effort: Type.Optional(Type.Number()),
  palette: Type.Optional(Type.Boolean()),
  colours: Type.Optional(Type.Number()),
  colors: Type.Optional(Type.Number()),
  dither: Type.Optional(Type.Number())
});

export default schema;
