import { Type } from "@sinclair/typebox";
import { jpegSchema } from "./jpeg.js";
import { pngSchema } from "./png.js";
import { webpSchema } from "./webp.js";

export const formatSchema = Type.Union([jpegSchema, pngSchema, webpSchema]);
