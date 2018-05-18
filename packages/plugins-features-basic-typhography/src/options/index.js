// @flow
import { Record } from "immutable";
import isPlainObject from "is-plain-object";

const defaultOptions = {
  blockTypes: [
    "paragraph",
    "heading-one",
    "heading-two",
    "heading-three",
    "heading-four"
  ],
  defaultBlock: "paragraph",
  externalRenderer: false
};

export type typeOptions = {
  blockTypes: Array<string>,
  defaultBlock: string,
  externalRenderer: boolean
};

class Options extends Record(defaultOptions, "Typhography Options") {
  blockTypes: Array<string>;
  defaultBlock: string;
  externalRenderer: boolean;

  static create(attrs: any = {}) {
    if (Options.isOptions(attrs)) return attrs;
    if (isPlainObject(attrs)) return Options.fromJSON(attrs);

    throw new Error("`Options.create` only accepts objects or options");
  }

  static fromJSON(object: any) {
    if (Options.isOptions(object)) return object;
    const options = {
      ...defaultOptions,
      ...object
    };
    const { blockTypes, defaultBlock } = options;
    if (!blockTypes || !defaultBlock || !Array.isArray(blockTypes)) {
      throw new Error(
        "Typhography requires blockTypes and defaultBlock option"
      );
    }

    return new Options(options);
  }

  static isOptions(any: any) {
    return !!(
      any instanceof Record &&
      ["blockTypes", "defaultBlock"].every(key => any.has(key))
    );
  }

  /**
   * Alias `toJS`.
   */

  toJS(options: any) {
    return this.toJSON(options);
  }
}

export default Options;