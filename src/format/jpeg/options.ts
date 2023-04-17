import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  quality: Type.Optional(Type.Number()),
  progressive: Type.Optional(Type.Boolean()),
  chromaSubsampling: Type.Optional(Type.String()),
  trellisQuantisation: Type.Optional(Type.Boolean()),
  overshootDeringing: Type.Optional(Type.Boolean()),
  optimiseScans: Type.Optional(Type.Boolean()),
  optimizeScans: Type.Optional(Type.Boolean()),
  optimiseCoding: Type.Optional(Type.Boolean()),
  optimizeCoding: Type.Optional(Type.Boolean()),
  quantisationTable: Type.Optional(Type.Number()),
  quantizationTable: Type.Optional(Type.Number()),
  mozjpeg: Type.Optional(Type.Boolean())
});

export default schema;
