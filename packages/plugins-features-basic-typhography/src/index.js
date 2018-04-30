// @flow
import Options, { type typeOptions } from "./options";
import createChanges from "./changes";
import createUtils from "./utils";
import createRenderers from "./renderers";

export default function createPlugin(pluginOptions: typeOptions) {
  const opt = new Options(pluginOptions);
  const utils = createUtils(opt);
  const changes = createChanges(opt, utils);
  const renderers = createRenderers(opt);
  return { changes, utils, ...renderers };
}