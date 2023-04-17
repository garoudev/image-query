import { Type } from "@sinclair/typebox";
import jpeg from "#format/jpeg";
import png from "#format/png";
import webp from "#format/webp";
import gif from "#format/gif";

export const formatSchema = Type.Union([jpeg, png, webp, gif]);
