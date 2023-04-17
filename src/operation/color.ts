import { Type } from "@sinclair/typebox";
import rgba from "./rgba.js";

const schema = Type.Union([Type.String(), rgba]);

export default schema;
