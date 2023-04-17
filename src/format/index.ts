import { Type } from "@sinclair/typebox";
import jpeg from "#format/jpeg";
import png from "#format/png";
import webp from "#format/webp";
import gif from "#format/gif";

const schema = Type.Union([jpeg, png, webp, gif]);

export default schema;
