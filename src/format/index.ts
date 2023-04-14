import { Type } from "@sinclair/typebox";
import { jpegSchema } from "./jpeg.js";
import { pngSchema } from "./png.js";

export const formatSchema = Type.Union([jpegSchema, pngSchema]);
