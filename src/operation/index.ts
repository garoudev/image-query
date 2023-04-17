import { Type } from "@sinclair/typebox";
import resize from "#operation/resize";
import extend from "#operation/extend";
import extract from "#operation/extract";
import trim from "#operation/trim";
import rotate from "#operation/rotate";
import flip from "#operation/flip";
import flop from "#operation/flop";
import affine from "#operation/affine";
import sharpen from "#operation/sharpen";
import median from "#operation/median";
import blur from "#operation/blur";
import flatten from "#operation/flatten";
import gamma from "#operation/gamma";
import negate from "#operation/negate";
import normalize from "#operation/normalize";
import clahe from "#operation/clahe";
import convolve from "#operation/convolve";
import threshold from "#operation/threshold";
import linear from "#operation/linear";
import recomb from "#operation/recomb";
import modulate from "#operation/modulate";
import tint from "#operation/tint";
import grayscale from "#operation/grayscale";
import pipelineColorspace from "#operation/pipelineColorspace";
import toColorspace from "#operation/toColorspace";
import removeAlpha from "#operation/removeAlpha";
import ensureAlpha from "#operation/ensureAlpha";
import extractChannel from "#operation/extractChannel";
import withMetadata from "#operation/withMetadata";

const schema = Type.Union([
  resize,
  extend,
  extract,
  trim,
  rotate,
  flip,
  flop,
  affine,
  sharpen,
  median,
  blur,
  flatten,
  gamma,
  negate,
  normalize,
  clahe,
  convolve,
  threshold,
  linear,
  recomb,
  modulate,
  tint,
  grayscale,
  pipelineColorspace,
  toColorspace,
  removeAlpha,
  ensureAlpha,
  extractChannel,
  withMetadata
]);

export default schema;
