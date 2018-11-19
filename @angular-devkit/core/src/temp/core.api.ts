// @public (undocumented)
export function asPosixPath(path: Path): PosixPath;

// @public (undocumented)
export function asWindowsPath(path: Path): WindowsPath;

// @public
class BaseException extends Error {
  constructor(message?: string);
}

// @public
export function basename(path: Path): PathFragment;

// @public (undocumented)
class CircularDependencyFoundException extends BaseException {
  constructor();
}

// @public
export function clean<T>(array: Array<T | undefined>): Array<T>;

// @public (undocumented)
class ContentHasMutatedException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
export function deepCopy<T extends any>(value: T): T;

// @public (undocumented)
class DependencyNotFoundException extends BaseException {
  constructor();
}

// @public
export function dirname(path: Path): Path;

// WARNING: Unsupported export "workspace" Currently the "namespace" block only supports constant variables.
// @public
module experimental {
}

// @public (undocumented)
export function extname(path: Path): string;

// @public (undocumented)
class FileAlreadyExistException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
class FileDoesNotExistException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
export function fragment(path: string): PathFragment;

// @public (undocumented)
export function getSystemPath(path: Path): string;

// @public
class InvalidJsonCharacterException extends JsonException {
  constructor(context: JsonParserContext);
  // (undocumented)
  character: number;
  // (undocumented)
  invalidChar: string;
  // (undocumented)
  line: number;
  // (undocumented)
  offset: number;
}

// @public (undocumented)
class InvalidPathException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
class InvalidUpdateRecordException extends BaseException {
  constructor();
}

// @public
export function isAbsolute(p: Path): boolean;

// @public (undocumented)
export function isJsonArray(value: JsonValue): value is JsonArray;

// @public (undocumented)
export function isJsonObject(value: JsonValue): value is JsonObject;

// @public
export function isObservable(obj: any | Observable<any>): obj is Observable<any>;

// @public
export function isPromise(obj: any): obj is Promise<any>;

// @public
export function join(p1: Path, ...others: string[]): Path;

// WARNING: Unsupported export "schema" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "isJsonObject" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "isJsonArray" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "Position" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstNode" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstNodeBase" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstNumber" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstString" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstIdentifier" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonArray" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstArray" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonObject" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstKeyValue" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstObject" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstConstantFalse" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstConstantNull" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstConstantTrue" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstMultilineComment" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonAstComment" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonValue" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "parseJsonAst" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "parseJson" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "InvalidJsonCharacterException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "UnexpectedEndOfInputException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "PathSpecificJsonException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonParserContext" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonParseMode" Currently the "namespace" block only supports constant variables.
// @public
module json {
}

// @public (undocumented)
interface JsonArray extends Array<JsonValue> {
}

// @public (undocumented)
interface JsonAstArray extends JsonAstNodeBase {
  // (undocumented)
  readonly elements: JsonAstNode[];
  // (undocumented)
  readonly kind: 'array';
  // (undocumented)
  readonly value: JsonArray;
}

// @public (undocumented)
interface JsonAstComment extends JsonAstNodeBase {
  // (undocumented)
  readonly content: string;
  // (undocumented)
  readonly kind: 'comment';
}

// @public (undocumented)
interface JsonAstConstantFalse extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'false';
  // (undocumented)
  readonly value: false;
}

// @public (undocumented)
interface JsonAstConstantNull extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'null';
  // (undocumented)
  readonly value: null;
}

// @public (undocumented)
interface JsonAstConstantTrue extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'true';
  // (undocumented)
  readonly value: true;
}

// @public (undocumented)
interface JsonAstIdentifier extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'identifier';
  // (undocumented)
  readonly value: string;
}

// @public (undocumented)
interface JsonAstKeyValue extends JsonAstNodeBase {
  // (undocumented)
  readonly key: JsonAstString | JsonAstIdentifier;
  // (undocumented)
  readonly kind: 'keyvalue';
  // (undocumented)
  readonly value: JsonAstNode;
}

// @public (undocumented)
interface JsonAstMultilineComment extends JsonAstNodeBase {
  // (undocumented)
  readonly content: string;
  // (undocumented)
  readonly kind: 'multicomment';
}

// @public (undocumented)
interface JsonAstNodeBase {
  // (undocumented)
  readonly comments?: (JsonAstComment | JsonAstMultilineComment)[];
  // (undocumented)
  readonly end: Position;
  // (undocumented)
  readonly start: Position;
  // (undocumented)
  readonly text: string;
}

// @public (undocumented)
interface JsonAstNumber extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'number';
  // (undocumented)
  readonly value: number;
}

// @public (undocumented)
interface JsonAstObject extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'object';
  // (undocumented)
  readonly properties: JsonAstKeyValue[];
  // (undocumented)
  readonly value: JsonObject;
}

// @public (undocumented)
interface JsonAstString extends JsonAstNodeBase {
  // (undocumented)
  readonly kind: 'string';
  // (undocumented)
  readonly value: string;
}

// @public (undocumented)
class JsonException extends BaseException {
}

// @public (undocumented)
interface JsonObject {
  // (undocumented)
  [prop: string]: JsonValue;
}

// @public
enum JsonParseMode {
  // (undocumented)
  CommentsAllowed = 1,
  // (undocumented)
  Default = 0,
  // (undocumented)
  HexadecimalNumberAllowed = 16,
  // (undocumented)
  IdentifierKeyNamesAllowed = 4,
  // (undocumented)
  Json = 0,
  // (undocumented)
  Json5 = 255,
  // (undocumented)
  LaxNumberParsingAllowed = 64,
  // (undocumented)
  Loose = 255,
  // (undocumented)
  MultiLineStringAllowed = 32,
  // (undocumented)
  NumberConstantsAllowed = 128,
  // (undocumented)
  SingleQuotesAllowed = 2,
  // (undocumented)
  Strict = 0,
  // (undocumented)
  TrailingCommasAllowed = 8
}

// @public
interface JsonParserContext {
  // (undocumented)
  readonly mode: JsonParseMode;
  // (undocumented)
  readonly original: string;
  // (undocumented)
  position: Position;
  // (undocumented)
  previous: Position;
}

// WARNING: Unsupported export "IndentLogger" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LevelTransformLogger" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LevelCapLogger" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LoggerMetadata" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LogEntry" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LoggerApi" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LogLevel" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "Logger" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "NullLogger" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "TransformLogger" Currently the "namespace" block only supports constant variables.
// @public
module logging {
}

// @public
export function mapObject<T, V>(obj: {
    [k: string]: T;
}, mapper: (k: string, v: T) => V): {
    [k: string]: V;
};

// @public (undocumented)
class MergeConflictException extends BaseException {
  constructor(path: string);
}

// @public
export function noCacheNormalize(path: string): Path;

// @public
export function normalize(path: string): Path;

// @public
export function parseJson(input: string, mode?: JsonParseMode, options?: ParseJsonOptions): JsonValue;

// @public
export function parseJsonAst(input: string, mode?: JsonParseMode): JsonAstNode;

// @public (undocumented)
class PartiallyOrderedSet<T> implements Set<T> {
  // WARNING: The name "__@iterator" contains unsupported characters; API names should use only letters, numbers, and underscores
  // (undocumented)
  [Symbol.iterator](): IterableIterator<T>;
  // WARNING: The name "__@toStringTag" contains unsupported characters; API names should use only letters, numbers, and underscores
  // (undocumented)
  readonly __@toStringTag: 'Set';
  // (undocumented)
  protected _checkCircularDependencies(item: T, deps: Set<T>): void;
  // (undocumented)
  add(item: T, deps?: (Set<T> | T[])): this;
  // (undocumented)
  clear(): void;
  // (undocumented)
  delete(item: T): boolean;
  entries(): IterableIterator<[T, T]>;
  // (undocumented)
  forEach(callbackfn: (value: T, value2: T, set: PartiallyOrderedSet<T>) => void, thisArg?: any): void;
  // (undocumented)
  has(item: T): boolean;
  keys(): IterableIterator<T>;
  // (undocumented)
  readonly size: number;
  values(): IterableIterator<T>;
}

// @public (undocumented)
class PathCannotBeFragmentException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
class PathIsDirectoryException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
class PathIsFileException extends BaseException {
  constructor(path: string);
}

// @public (undocumented)
class PathMustBeAbsoluteException extends BaseException {
  constructor(path: string);
}

// @public
class PathSpecificJsonException extends JsonException {
  constructor(path: string, exception: JsonException);
  // (undocumented)
  exception: JsonException;
  // (undocumented)
  path: string;
}

// @public
interface Position {
  // (undocumented)
  readonly character: number;
  // (undocumented)
  readonly line: number;
  // (undocumented)
  readonly offset: number;
}

// @public
class PriorityQueue<T> {
  constructor(_comparator: (x: T, y: T) => number);
  // (undocumented)
  clear(): void;
  // (undocumented)
  peek(): T | undefined;
  // (undocumented)
  pop(): T | undefined;
  // (undocumented)
  push(item: T): void;
  // (undocumented)
  readonly size: number;
  // (undocumented)
  toArray(): Array<T>;
}

// @public
export function relative(from: Path, to: Path): Path;

// @public
export function resetNormalizeCache(): void;

// @public
export function resolve(p1: Path, p2: Path): Path;

// WARNING: Unsupported export "transforms" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonPointer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidatorErrorBase" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "RefValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "LimitValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "AdditionalPropertiesValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "FormatValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "RequiredValidatorError" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidatorResult" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidatorOptions" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidator" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaFormatter" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaFormat" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SmartDefaultProvider" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaKeywordValidator" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "PromptDefinition" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "PromptProvider" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaRegistry" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonSchemaVisitor" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "JsonVisitor" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "buildJsonPointer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "joinJsonPointer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "parseJsonPointer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "UriHandler" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SchemaValidationException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CoreSchemaRegistry" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "visitJson" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "visitJsonSchema" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "ReferenceResolver" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "getTypesOfSchema" Currently the "namespace" block only supports constant variables.
// @public
module schema {
}

// @public
export function split(path: Path): PathFragment[];

// WARNING: Unsupported export "decamelize" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "dasherize" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "camelize" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "classify" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "underscore" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "capitalize" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "levenshtein" Currently the "namespace" block only supports constant variables.
// @public
module strings {
}

// WARNING: Unsupported export "oneLine" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "indentBy" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "stripIndent" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "stripIndents" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "trimNewlines" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "TemplateTag" Currently the "namespace" block only supports constant variables.
// @public
module tags {
}

// @public
export function template<T>(content: string, options?: TemplateOptions): (input: T) => string;

// @public
interface TemplateAst {
  // (undocumented)
  children: TemplateAstNode[];
  // (undocumented)
  content: string;
  // (undocumented)
  fileName: string;
}

// @public
interface TemplateAstBase {
  // (undocumented)
  end: Position;
  // (undocumented)
  start: Position;
}

// @public
interface TemplateAstComment extends TemplateAstBase {
  // (undocumented)
  kind: 'comment';
  // (undocumented)
  text: string;
}

// @public
interface TemplateAstContent extends TemplateAstBase {
  // (undocumented)
  content: string;
  // (undocumented)
  kind: 'content';
}

// @public
interface TemplateAstEscape extends TemplateAstBase {
  // (undocumented)
  expression: string;
  // (undocumented)
  kind: 'escape';
}

// @public
interface TemplateAstEvaluate extends TemplateAstBase {
  // (undocumented)
  expression: string;
  // (undocumented)
  kind: 'evaluate';
}

// @public
interface TemplateAstInterpolate extends TemplateAstBase {
  // (undocumented)
  expression: string;
  // (undocumented)
  kind: 'interpolate';
}

// @public (undocumented)
interface TemplateOptions {
  // (undocumented)
  fileName?: string;
  // (undocumented)
  module?: boolean | {
          exports: {};
      };
  // (undocumented)
  sourceMap?: boolean;
  // (undocumented)
  sourceRoot?: string;
  // (undocumented)
  sourceURL?: string;
}

// @public
export function templateParser(sourceText: string, fileName: string): TemplateAst;

// WARNING: Unsupported export "colors" Currently the "namespace" block only supports constant variables.
// WARNING: Export "reset" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bold" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "dim" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "italic" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "underline" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "inverse" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "hidden" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "strikethrough" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "black" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "red" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "green" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "yellow" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "blue" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "magenta" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "cyan" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "white" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "grey" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "gray" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgBlack" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgRed" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgGreen" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgYellow" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgBlue" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgMagenta" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgCyan" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// WARNING: Export "bgWhite" must be of type "string", "number" or "boolean" when API Extractor is configured for conservative namespaces
// @public
module terminal {
}

// @public
class UnexpectedEndOfInputException extends JsonException {
  constructor(_context: JsonParserContext);
}

// @public (undocumented)
class UnimplementedException extends BaseException {
  constructor();
}

// @public (undocumented)
class UnknownException extends Error {
  constructor(message: string);
}

// @public (undocumented)
class UnsupportedPlatformException extends BaseException {
  constructor();
}

// WARNING: Unsupported export "test" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "AliasHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "stringToFileBuffer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "fileBufferToString" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "Empty" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "FileBuffer" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "FileBufferLike" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "HostWatchOptions" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "HostWatchEventType" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "Stats" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "HostWatchEvent" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "HostCapabilities" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "ReadonlyHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "Host" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SimpleMemoryHostStats" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SimpleMemoryHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "ReplacementFunction" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "PatternMatchingHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHostCreate" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHostOverwrite" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHostRename" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHostDelete" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHostRecord" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "CordHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SafeReadonlyHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "ScopedHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SynchronousDelegateExpectedException" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "SyncDelegateHost" Currently the "namespace" block only supports constant variables.
// WARNING: Unsupported export "ResolverHost" Currently the "namespace" block only supports constant variables.
// @public
module virtualFs {
  // WARNING: The type "TemplateTag" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  fileBuffer: TemplateTag<FileBuffer>;

}

// WARNING: Unsupported export: JsonAstNode
// WARNING: Unsupported export: JsonValue
// WARNING: Unsupported export: TemplateAstNode
// WARNING: Unsupported export: Path
// WARNING: Unsupported export: PathFragment
// WARNING: Unsupported export: NormalizedSep
// WARNING: Unsupported export: NormalizedRoot
// WARNING: Unsupported export: path
// WARNING: Unsupported export: WindowsPath
// WARNING: Unsupported export: PosixPath
// (No @packagedocumentation comment for this package)
