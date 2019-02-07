// ported from https://github.com/DefinitelyTyped/DefinitelyTyped
// definitions for slate-react 0.20
// TypeScript Version: 2.8
import {
  Mark,
  Node,
  Block,
  Inline,
  Schema,
  Value,
  Stack,
  Document,
  Editor as Controller,
  Operations,
  Operation,
  Change
} from "slate";
import * as Immutable from "immutable";
import * as React from "react";

// Values prefixed with "data-..." (Used for spellchecking according to docs)
export interface RenderAttributes {
  [key: string]: any;
}

export interface RenderMarkProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Controller;
  mark: Mark;
  marks: Immutable.Set<Mark>;
  node: Node;
  offset: number;
  text: string;
}

export interface RenderNodeProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Controller;
  isFocused: boolean;
  isSelected: boolean;
  key: string;
  node: Block | Inline;
  parent: Node;
  readOnly: boolean;
}

export type EventHook = (
  event: Event,
  editor: Controller,
  next: () => any
) => any;

export interface Plugin {
  decorateNode?: (node: Node, editor: Controller, next: () => any) => any;
  renderEditor?: (
    props: EditorProps,
    editor: Controller,
    next: () => any
  ) => any;
  renderMark?: (
    props: RenderMarkProps,
    editor: Controller,
    next: () => any
  ) => any;
  renderNode?: (
    props: RenderNodeProps,
    editor: Controller,
    next: () => any
  ) => any;
  shouldNodeComponentUpdate?: (
    previousProps: RenderNodeProps,
    props: RenderNodeProps,
    editor: Controller,
    next: () => any
  ) => any;

  onBeforeInput?: EventHook;
  onBlur?: EventHook;
  onClick?: EventHook;
  onCompositionEnd?: EventHook;
  onCompositionStart?: EventHook;
  onCopy?: EventHook;
  onCut?: EventHook;
  onDragEnd?: EventHook;
  onDragEnter?: EventHook;
  onDragExit?: EventHook;
  onDragLeave?: EventHook;
  onDragOver?: EventHook;
  onDragStart?: EventHook;
  onDrop?: EventHook;
  onFocus?: EventHook;
  onInput?: EventHook;
  onKeyDown?: EventHook;
  onKeyUp?: EventHook;
  onMouseDown?: EventHook;
  onMouseUp?: EventHook;
  onPaste?: EventHook;
  onSelect?: EventHook;
}

export interface BasicEditorProps {
  value: Value;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  className?: string;
  onChange?: (change: Change) => any;
  placeholder?: any;
  plugins?: Plugin[];
  readOnly?: boolean;
  role?: string;
  schema?: Schema;
  spellCheck?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
}

// tsling:disable interface-over-type-literal
export type EditorProps = BasicEditorProps & Plugin;

export interface EditorState {
  schema: Schema;
  value: Value;
  stack: Stack; // [TODO] define stack
}

export class Editor extends React.Component<EditorProps, EditorState> {
  schema: Schema;
  stack: Stack;

  readonly plugins: Plugin[];
  readonly operations: Immutable.List<Operation>;
  readonly readOnly: boolean;
  readonly value: Value;

  // Instance Methods
  applyOperation(...args: any[]): Controller;
  blur(): void;
  command(...args: any[]): Controller;
  focus(): void;
  normalize(...args: any[]): Controller;
  query(...args: any[]): Controller;
  resolveController(
    plugins: Plugin[],
    schema: Schema,
    commands: any[],
    queries: any[]
  ): void;
  run(...args: any[]): any;
  withoutNormalizing(...args: any[]): Controller;
}

export type SlateType =
  | "fragment"
  | "html"
  | "node"
  | "rich"
  | "text"
  | "files";

export function cloneFragment(
  event: Event,
  editor: Controller,
  fragment?: Document,
  callback?: () => void
): void;
export function findDOMNode(node: Node, win?: Window): Element;
export function findDOMRange(range: Range, win?: Window): Range;
export function findNode(element: Element, value: Value): Node;
export function findRange(selection: Selection, value: Value): Range;
export function getEventRange(event: Event, value: Value): Range;
export function getEventTransfer(event: Event): { type: SlateType; node: Node };
export function setEventTransfer(
  event: Event,
  type: SlateType,
  data: any
): void;
