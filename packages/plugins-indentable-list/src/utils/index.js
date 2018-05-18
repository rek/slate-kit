// @flow
import { getHighestSelectedBlocks } from "@vericus/slate-kit-plugins-utils";
import type { Value, Node } from "slate";
import type { typeOptions } from "../options";

function selectedOrderedList(opts: typeOptions, value: Value) {
  const { ordered } = opts;
  return getHighestSelectedBlocks(value).filter(node => node.type === ordered);
}

function isOrderedNode(opts: typeOptions, node: Node) {
  const { ordered } = opts;
  return node.type === ordered;
}

function isUnorderedNode(opts: typeOptions, node: Node) {
  const { unordered } = opts;
  return node.type === unordered;
}

function isCheckNode(opts: typeOptions, node: Node) {
  const { checkList } = opts;
  return node.type === checkList;
}

function isListNode(opts: typeOptions, node: Node) {
  const { ordered, unordered, checkList } = opts;
  const listTypes = [ordered, unordered, checkList];
  return listTypes.includes(node.type);
}

function isOrderedList(opts: typeOptions, value: Value) {
  return getHighestSelectedBlocks(value).every(node =>
    isOrderedNode(opts, node)
  );
}

function isUnorderedList(opts: typeOptions, value: Value) {
  return getHighestSelectedBlocks(value).every(node =>
    isUnorderedNode(opts, node)
  );
}

function isCheckList(opts: typeOptions, value: Value) {
  return getHighestSelectedBlocks(value).every(node => isCheckNode(opts, node));
}

function createUtils(opts: typeOptions) {
  return {
    isListNode: (node: Node) => isListNode(opts, node),
    isOrderedNode: (node: Node) => isOrderedNode(opts, node),
    isUnorderedNode: (node: Node) => isUnorderedNode(opts, node),
    isCheckNode: (node: Node) => isCheckNode(opts, node),
    isOrderedList: (value: Value) => isOrderedList(opts, value),
    isUnorderedList: (value: Value) => isUnorderedList(opts, value),
    isCheckList: (value: Value) => isCheckList(opts, value),
    selectedOrderedList: (value: Value) => selectedOrderedList(opts, value)
  };
}

export default createUtils;
export {
  isListNode,
  isOrderedNode,
  isUnorderedNode,
  isCheckNode,
  isOrderedList,
  isUnorderedList,
  isCheckList,
  selectedOrderedList
};