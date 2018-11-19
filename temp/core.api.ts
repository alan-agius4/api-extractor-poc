// @public (undocumented)
export function asPosixPath(path: Path): PosixPath;

// @public (undocumented)
export function asWindowsPath(path: Path): WindowsPath;

// @public (undocumented)
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

// @public (undocumented)
module experimental {
  module workspace {
    // (undocumented)
    class AmbiguousProjectPathException extends BaseException {
      constructor(path: Path, projects: ReadonlyArray<string>);
      // (undocumented)
      readonly path: Path;
      // (undocumented)
      readonly projects: ReadonlyArray<string>;
    }

    // (undocumented)
    class ProjectNotFoundException extends BaseException {
      constructor(name: string);
    }

    // (undocumented)
    class ProjectToolNotFoundException extends BaseException {
      constructor(name: string);
    }

    // (undocumented)
    class Workspace {
      // WARNING: The type "virtualFs.Host" needs to be exported by the package (e.g. added to index.ts)
      constructor(_root: Path, _host: virtualFs.Host<{}>);
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getCli(): WorkspaceTool;
      // (undocumented)
      getDefaultProjectName(): string | null;
      // WARNING: The type "WorkspaceProject" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getProject(projectName: string): WorkspaceProject;
      // (undocumented)
      getProjectByPath(path: Path): string | null;
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getProjectCli(projectName: string): WorkspaceTool;
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getProjectSchematics(projectName: string): WorkspaceTool;
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getProjectTargets(projectName: string): WorkspaceTool;
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getSchematics(): WorkspaceTool;
      // WARNING: The type "WorkspaceTool" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      getTargets(): WorkspaceTool;
      // WARNING: The type "virtualFs.Host" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      readonly host: virtualFs.Host<{}>;
      // (undocumented)
      listProjectNames(): string[];
      // (undocumented)
      loadWorkspaceFromHost(workspacePath: Path): Observable<this>;
      // (undocumented)
      loadWorkspaceFromJson(json: {}): Observable<this>;
      // (undocumented)
      readonly newProjectRoot: string | undefined;
      // (undocumented)
      readonly root: Path;
      // (undocumented)
      validateAgainstSchema<T = {}>(contentJson: {}, schemaJson: JsonObject): Observable<T>;
      // (undocumented)
      readonly version: number;
    }

    // (undocumented)
    class WorkspaceNotYetLoadedException extends BaseException {
      constructor();
    }

    interface WorkspaceProject {
      architect?: WorkspaceTool;
      cli?: WorkspaceTool;
      prefix: string;
      projectType: "application" | "library";
      root: string;
      schematics?: WorkspaceTool;
      sourceRoot?: string;
      targets?: WorkspaceTool;
    }

    interface WorkspaceSchema {
      // WARNING: The name "$schema" contains unsupported characters; API names should use only letters, numbers, and underscores
      $schema?: string;
      architect?: WorkspaceTool;
      cli?: WorkspaceTool;
      defaultProject?: string;
      newProjectRoot?: string;
      projects: {
        [k: string]: WorkspaceProject;
      }
      schematics?: WorkspaceTool;
      targets?: WorkspaceTool;
      version: number;
    }

    interface WorkspaceTool {
      // (undocumented)
      [k: string]: any;
      // WARNING: The name "$schema" contains unsupported characters; API names should use only letters, numbers, and underscores
      $schema?: string;
    }

    // (undocumented)
    class WorkspaceToolNotFoundException extends BaseException {
      constructor(name: string);
    }

  }

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

// @beta (undocumented)
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

// WARNING: Unsupported export: JsonAstNode
// WARNING: Unsupported export: JsonValue
// @public
module json {
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

  // (undocumented)
  export function isJsonArray(value: JsonValue): value is JsonArray;

  // (undocumented)
  export function isJsonObject(value: JsonValue): value is JsonObject;

  // (undocumented)
  interface JsonArray extends Array<JsonValue> {
  }

  // (undocumented)
  interface JsonAstArray extends JsonAstNodeBase {
    // (undocumented)
    readonly elements: JsonAstNode[];
    // (undocumented)
    readonly kind: 'array';
    // (undocumented)
    readonly value: JsonArray;
  }

  // (undocumented)
  interface JsonAstComment extends JsonAstNodeBase {
    // (undocumented)
    readonly content: string;
    // (undocumented)
    readonly kind: 'comment';
  }

  // (undocumented)
  interface JsonAstConstantFalse extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'false';
    // (undocumented)
    readonly value: false;
  }

  // (undocumented)
  interface JsonAstConstantNull extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'null';
    // (undocumented)
    readonly value: null;
  }

  // (undocumented)
  interface JsonAstConstantTrue extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'true';
    // (undocumented)
    readonly value: true;
  }

  // (undocumented)
  interface JsonAstIdentifier extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'identifier';
    // (undocumented)
    readonly value: string;
  }

  // (undocumented)
  interface JsonAstKeyValue extends JsonAstNodeBase {
    // (undocumented)
    readonly key: JsonAstString | JsonAstIdentifier;
    // (undocumented)
    readonly kind: 'keyvalue';
    // (undocumented)
    readonly value: JsonAstNode;
  }

  // (undocumented)
  interface JsonAstMultilineComment extends JsonAstNodeBase {
    // (undocumented)
    readonly content: string;
    // (undocumented)
    readonly kind: 'multicomment';
  }

  // (undocumented)
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

  // (undocumented)
  interface JsonAstNumber extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'number';
    // (undocumented)
    readonly value: number;
  }

  // (undocumented)
  interface JsonAstObject extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'object';
    // (undocumented)
    readonly properties: JsonAstKeyValue[];
    // (undocumented)
    readonly value: JsonObject;
  }

  // (undocumented)
  interface JsonAstString extends JsonAstNodeBase {
    // (undocumented)
    readonly kind: 'string';
    // (undocumented)
    readonly value: string;
  }

  // (undocumented)
  class JsonException extends BaseException {
  }

  // (undocumented)
  interface JsonObject {
    // (undocumented)
    [prop: string]: JsonValue;
  }

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

  export function parseJson(input: string, mode?: JsonParseMode, options?: ParseJsonOptions): JsonValue;

  export function parseJsonAst(input: string, mode?: JsonParseMode): JsonAstNode;

  class PathSpecificJsonException extends JsonException {
    constructor(path: string, exception: JsonException);
    // (undocumented)
    exception: JsonException;
    // (undocumented)
    path: string;
  }

  interface Position {
    // (undocumented)
    readonly character: number;
    // (undocumented)
    readonly line: number;
    // (undocumented)
    readonly offset: number;
  }

  // WARNING: Unsupported export: JsonPointer
  // WARNING: Unsupported export: SchemaValidatorError
  // WARNING: Unsupported export: PromptProvider
  // WARNING: Unsupported export: UriHandler
  module schema {
    // (undocumented)
    interface AdditionalPropertiesValidatorError extends SchemaValidatorErrorBase {
      // (undocumented)
      keyword: 'additionalProperties';
      // (undocumented)
      params: {
        additionalProperty: string;
      }
    }

    // (undocumented)
    export function buildJsonPointer(fragments: string[]): JsonPointer;

    // (undocumented)
    class CoreSchemaRegistry implements SchemaRegistry {
      // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
      constructor(formats?: SchemaFormat[]);
      // (undocumented)
      protected _resolver: {
        context?: ajv.ValidateFunction;
        schema?: JsonObject;
      }
      // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      addFormat(format: SchemaFormat): void;
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      addPostTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      addPreTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
      // WARNING: The type "SmartDefaultProvider" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      addSmartDefaultProvider<T>(source: string, provider: SmartDefaultProvider<T>): void;
      // WARNING: The type "SchemaValidator" needs to be exported by the package (e.g. added to index.ts)
      compile(schema: JsonObject): Observable<SchemaValidator>;
      flatten(schema: JsonObject): Observable<JsonObject>;
      // WARNING: The type "UriHandler" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      registerUriHandler(handler: UriHandler): void;
      // WARNING: The type "PromptProvider" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      usePromptProvider(provider: PromptProvider): void;
    }

    // (undocumented)
    interface FormatValidatorError extends SchemaValidatorErrorBase {
      // (undocumented)
      keyword: 'format';
      // (undocumented)
      params: {
        format: string;
      }
    }

    // (undocumented)
    export function getTypesOfSchema(schema: JsonObject | true): Set<string>;

    // (undocumented)
    export function joinJsonPointer(root: JsonPointer, ...others: string[]): JsonPointer;

    // (undocumented)
    interface JsonSchemaVisitor {
      // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      (current: JsonObject | JsonArray, pointer: JsonPointer, parentSchema?: JsonObject | JsonArray, index?: string): void;
    }

    // (undocumented)
    interface JsonVisitor {
      // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      (value: JsonValue, pointer: JsonPointer, schema?: JsonObject, root?: JsonObject | JsonArray): Observable<JsonValue> | JsonValue;
    }

    // (undocumented)
    interface LimitValidatorError extends SchemaValidatorErrorBase {
      // (undocumented)
      keyword: 'maxItems' | 'minItems' | 'maxLength' | 'minLength' | 'maxProperties' | 'minProperties';
      // (undocumented)
      params: {
        limit: number;
      }
    }

    // (undocumented)
    export function parseJsonPointer(pointer: JsonPointer): string[];

    // (undocumented)
    interface PromptDefinition {
      // (undocumented)
      default?: string | number | boolean | null;
      // (undocumented)
      id: string;
      // (undocumented)
      items?: Array<string | {
              value: JsonValue;
              label: string;
          }>;
      // (undocumented)
      message: string;
      // (undocumented)
      priority: number;
      // (undocumented)
      raw?: string | JsonObject;
      // (undocumented)
      type: string;
      // (undocumented)
      validator?: (value: string) => boolean | string | Promise<boolean | string>;
    }

    // (undocumented)
    interface ReferenceResolver<ContextT> {
      // (undocumented)
      __call: {
        context?: ContextT;
        schema?: JsonObject;
      }
    }

    // (undocumented)
    interface RefValidatorError extends SchemaValidatorErrorBase {
      // (undocumented)
      keyword: '$ref';
      // (undocumented)
      params: {
        ref: string;
      }
    }

    // (undocumented)
    interface RequiredValidatorError extends SchemaValidatorErrorBase {
      // (undocumented)
      keyword: 'required';
      // (undocumented)
      params: {
        missingProperty: string;
      }
    }

    // (undocumented)
    interface SchemaFormat {
      // (undocumented)
      formatter: SchemaFormatter;
      // (undocumented)
      name: string;
    }

    // (undocumented)
    interface SchemaFormatter {
      // (undocumented)
      readonly async: boolean;
      // (undocumented)
      validate(data: any): boolean | Observable<boolean>;
    }

    // (undocumented)
    interface SchemaKeywordValidator {
      // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      (data: JsonValue, schema: JsonValue, parent: JsonObject | JsonArray | undefined, parentProperty: string | number | undefined, pointer: JsonPointer, rootData: JsonValue): boolean | Observable<boolean>;
    }

    // (undocumented)
    interface SchemaRegistry {
      // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      addFormat(format: SchemaFormat): void;
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      addPostTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
      addPreTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
      // WARNING: The type "SmartDefaultProvider" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      addSmartDefaultProvider<T>(source: string, provider: SmartDefaultProvider<T>): void;
      // WARNING: The type "SchemaValidator" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      compile(schema: Object): Observable<SchemaValidator>;
      // (undocumented)
      flatten(schema: JsonObject | string): Observable<JsonObject>;
      // WARNING: The type "PromptProvider" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      usePromptProvider(provider: PromptProvider): void;
    }

    // (undocumented)
    class SchemaValidationException extends BaseException {
      // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
      constructor(errors?: SchemaValidatorError[], baseMessage?: string);
      // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      static createMessages(errors?: SchemaValidatorError[]): string[];
      // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      readonly errors: SchemaValidatorError[];
    }

    // (undocumented)
    interface SchemaValidator {
      // WARNING: The type "SchemaValidatorOptions" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "SchemaValidatorResult" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      (data: JsonValue, options?: SchemaValidatorOptions): Observable<SchemaValidatorResult>;
    }

    // (undocumented)
    interface SchemaValidatorErrorBase {
      // (undocumented)
      data?: JsonValue;
      // (undocumented)
      dataPath: string;
      // (undocumented)
      keyword: string;
      // (undocumented)
      message?: string;
    }

    // (undocumented)
    interface SchemaValidatorOptions {
      // (undocumented)
      applyPostTransforms?: boolean;
      // (undocumented)
      applyPreTransforms?: boolean;
      // (undocumented)
      withPrompts?: boolean;
    }

    // (undocumented)
    interface SchemaValidatorResult {
      // (undocumented)
      data: JsonValue;
      // (undocumented)
      errors?: SchemaValidatorError[];
      // (undocumented)
      success: boolean;
    }

    // (undocumented)
    interface SmartDefaultProvider<T> {
      // (undocumented)
      (schema: JsonObject): T | Observable<T>;
    }

    module transforms {
      // (undocumented)
      export function addUndefinedDefaults(value: JsonValue, _pointer: JsonPointer, schema?: JsonObject): JsonValue;

    }

    export function visitJson<ContextT>(json: JsonValue, visitor: JsonVisitor, schema?: JsonObject, refResolver?: ReferenceResolver<ContextT>, context?: ContextT): Observable<JsonValue>;

    // (undocumented)
    export function visitJsonSchema(schema: JsonObject, visitor: JsonSchemaVisitor): void;

  }

  class UnexpectedEndOfInputException extends JsonException {
    constructor(_context: JsonParserContext);
  }

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

// WARNING: Unsupported export: LogLevel
// @public
module logging {
  // (undocumented)
  class IndentLogger extends Logger {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    constructor(name: string, parent?: Logger | null, indentation?: string);
  }

  // (undocumented)
  class LevelCapLogger extends LevelTransformLogger {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    constructor(name: string, parent: Logger | null, levelCap: LogLevel);
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly levelCap: LogLevel;
    // (undocumented)
    static levelMap: {
      __index: {
        [level: string]: string;
      }
    }
    // (undocumented)
    readonly name: string;
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly parent: Logger | null;
  }

  // (undocumented)
  class LevelTransformLogger extends Logger {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    constructor(name: string, parent: Logger | null, levelTransform: (level: LogLevel) => LogLevel);
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    createChild(name: string): Logger;
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly levelTransform: (level: LogLevel) => LogLevel;
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    // (undocumented)
    readonly name: string;
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly parent: Logger | null;
  }

  // (undocumented)
  interface LogEntry extends LoggerMetadata {
    // (undocumented)
    level: LogLevel;
    // (undocumented)
    message: string;
    // (undocumented)
    timestamp: number;
  }

  // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  class Logger extends Observable<LogEntry>, implements LoggerApi {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    constructor(name: string, parent?: Logger | null);
    // WARNING: The type "LoggerMetadata" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _metadata: LoggerMetadata;
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _observable: Observable<LogEntry>;
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected readonly _subject: Subject<LogEntry>;
    // WARNING: The type "LoggerApi" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    asApi(): LoggerApi;
    // (undocumented)
    complete(): void;
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    createChild(name: string): Logger;
    // (undocumented)
    debug(message: string, metadata?: JsonObject): void;
    // (undocumented)
    error(message: string, metadata?: JsonObject): void;
    // (undocumented)
    fatal(message: string, metadata?: JsonObject): void;
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    forEach(next: (value: LogEntry) => void, PromiseCtor?: typeof Promise): Promise<void>;
    // (undocumented)
    info(message: string, metadata?: JsonObject): void;
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    lift<R>(operator: Operator<LogEntry, R>): Observable<R>;
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    // (undocumented)
    readonly name: string;
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly parent: Logger | null;
    // (undocumented)
    subscribe(): Subscription;
    // (undocumented)
    toString(): string;
    // (undocumented)
    warn(message: string, metadata?: JsonObject): void;
  }

  // (undocumented)
  interface LoggerApi {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    createChild(name: string): Logger;
    // (undocumented)
    debug(message: string, metadata?: JsonObject): void;
    // (undocumented)
    error(message: string, metadata?: JsonObject): void;
    // (undocumented)
    fatal(message: string, metadata?: JsonObject): void;
    // (undocumented)
    info(message: string, metadata?: JsonObject): void;
    // WARNING: The type "LogLevel" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    // (undocumented)
    warn(message: string, metadata?: JsonObject): void;
  }

  // (undocumented)
  interface LoggerMetadata extends JsonObject {
    // (undocumented)
    name: string;
    // (undocumented)
    path: string[];
  }

  // (undocumented)
  class NullLogger extends Logger {
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    constructor(parent?: Logger | null);
    // WARNING: The type "LoggerApi" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    asApi(): LoggerApi;
  }

  // (undocumented)
  class TransformLogger extends Logger {
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "LogEntry" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "Logger" needs to be exported by the package (e.g. added to index.ts)
    constructor(name: string, transform: (stream: Observable<LogEntry>) => Observable<LogEntry>, parent?: Logger | null);
  }

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

// WARNING: Unsupported export: JsonPointer
// WARNING: Unsupported export: SchemaValidatorError
// WARNING: Unsupported export: PromptProvider
// WARNING: Unsupported export: UriHandler
// @public
module schema {
  // (undocumented)
  interface AdditionalPropertiesValidatorError extends SchemaValidatorErrorBase {
    // (undocumented)
    keyword: 'additionalProperties';
    // (undocumented)
    params: {
      additionalProperty: string;
    }
  }

  // (undocumented)
  export function buildJsonPointer(fragments: string[]): JsonPointer;

  // (undocumented)
  class CoreSchemaRegistry implements SchemaRegistry {
    // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
    constructor(formats?: SchemaFormat[]);
    // (undocumented)
    protected _resolver: {
      context?: ajv.ValidateFunction;
      schema?: JsonObject;
    }
    // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    addFormat(format: SchemaFormat): void;
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    addPostTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    addPreTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    // WARNING: The type "SmartDefaultProvider" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    addSmartDefaultProvider<T>(source: string, provider: SmartDefaultProvider<T>): void;
    // WARNING: The type "SchemaValidator" needs to be exported by the package (e.g. added to index.ts)
    compile(schema: JsonObject): Observable<SchemaValidator>;
    flatten(schema: JsonObject): Observable<JsonObject>;
    // WARNING: The type "UriHandler" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    registerUriHandler(handler: UriHandler): void;
    // WARNING: The type "PromptProvider" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    usePromptProvider(provider: PromptProvider): void;
  }

  // (undocumented)
  interface FormatValidatorError extends SchemaValidatorErrorBase {
    // (undocumented)
    keyword: 'format';
    // (undocumented)
    params: {
      format: string;
    }
  }

  // (undocumented)
  export function getTypesOfSchema(schema: JsonObject | true): Set<string>;

  // (undocumented)
  export function joinJsonPointer(root: JsonPointer, ...others: string[]): JsonPointer;

  // (undocumented)
  interface JsonSchemaVisitor {
    // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    (current: JsonObject | JsonArray, pointer: JsonPointer, parentSchema?: JsonObject | JsonArray, index?: string): void;
  }

  // (undocumented)
  interface JsonVisitor {
    // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    (value: JsonValue, pointer: JsonPointer, schema?: JsonObject, root?: JsonObject | JsonArray): Observable<JsonValue> | JsonValue;
  }

  // (undocumented)
  interface LimitValidatorError extends SchemaValidatorErrorBase {
    // (undocumented)
    keyword: 'maxItems' | 'minItems' | 'maxLength' | 'minLength' | 'maxProperties' | 'minProperties';
    // (undocumented)
    params: {
      limit: number;
    }
  }

  // (undocumented)
  export function parseJsonPointer(pointer: JsonPointer): string[];

  // (undocumented)
  interface PromptDefinition {
    // (undocumented)
    default?: string | number | boolean | null;
    // (undocumented)
    id: string;
    // (undocumented)
    items?: Array<string | {
            value: JsonValue;
            label: string;
        }>;
    // (undocumented)
    message: string;
    // (undocumented)
    priority: number;
    // (undocumented)
    raw?: string | JsonObject;
    // (undocumented)
    type: string;
    // (undocumented)
    validator?: (value: string) => boolean | string | Promise<boolean | string>;
  }

  // (undocumented)
  interface ReferenceResolver<ContextT> {
    // (undocumented)
    __call: {
      context?: ContextT;
      schema?: JsonObject;
    }
  }

  // (undocumented)
  interface RefValidatorError extends SchemaValidatorErrorBase {
    // (undocumented)
    keyword: '$ref';
    // (undocumented)
    params: {
      ref: string;
    }
  }

  // (undocumented)
  interface RequiredValidatorError extends SchemaValidatorErrorBase {
    // (undocumented)
    keyword: 'required';
    // (undocumented)
    params: {
      missingProperty: string;
    }
  }

  // (undocumented)
  interface SchemaFormat {
    // (undocumented)
    formatter: SchemaFormatter;
    // (undocumented)
    name: string;
  }

  // (undocumented)
  interface SchemaFormatter {
    // (undocumented)
    readonly async: boolean;
    // (undocumented)
    validate(data: any): boolean | Observable<boolean>;
  }

  // (undocumented)
  interface SchemaKeywordValidator {
    // WARNING: The type "JsonPointer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    (data: JsonValue, schema: JsonValue, parent: JsonObject | JsonArray | undefined, parentProperty: string | number | undefined, pointer: JsonPointer, rootData: JsonValue): boolean | Observable<boolean>;
  }

  // (undocumented)
  interface SchemaRegistry {
    // WARNING: The type "SchemaFormat" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    addFormat(format: SchemaFormat): void;
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    addPostTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "JsonVisitor" needs to be exported by the package (e.g. added to index.ts)
    addPreTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    // WARNING: The type "SmartDefaultProvider" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    addSmartDefaultProvider<T>(source: string, provider: SmartDefaultProvider<T>): void;
    // WARNING: The type "SchemaValidator" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    compile(schema: Object): Observable<SchemaValidator>;
    // (undocumented)
    flatten(schema: JsonObject | string): Observable<JsonObject>;
    // WARNING: The type "PromptProvider" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    usePromptProvider(provider: PromptProvider): void;
  }

  // (undocumented)
  class SchemaValidationException extends BaseException {
    // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
    constructor(errors?: SchemaValidatorError[], baseMessage?: string);
    // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    static createMessages(errors?: SchemaValidatorError[]): string[];
    // WARNING: The type "SchemaValidatorError" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly errors: SchemaValidatorError[];
  }

  // (undocumented)
  interface SchemaValidator {
    // WARNING: The type "SchemaValidatorOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "SchemaValidatorResult" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    (data: JsonValue, options?: SchemaValidatorOptions): Observable<SchemaValidatorResult>;
  }

  // (undocumented)
  interface SchemaValidatorErrorBase {
    // (undocumented)
    data?: JsonValue;
    // (undocumented)
    dataPath: string;
    // (undocumented)
    keyword: string;
    // (undocumented)
    message?: string;
  }

  // (undocumented)
  interface SchemaValidatorOptions {
    // (undocumented)
    applyPostTransforms?: boolean;
    // (undocumented)
    applyPreTransforms?: boolean;
    // (undocumented)
    withPrompts?: boolean;
  }

  // (undocumented)
  interface SchemaValidatorResult {
    // (undocumented)
    data: JsonValue;
    // (undocumented)
    errors?: SchemaValidatorError[];
    // (undocumented)
    success: boolean;
  }

  // (undocumented)
  interface SmartDefaultProvider<T> {
    // (undocumented)
    (schema: JsonObject): T | Observable<T>;
  }

  module transforms {
    // (undocumented)
    export function addUndefinedDefaults(value: JsonValue, _pointer: JsonPointer, schema?: JsonObject): JsonValue;

  }

  export function visitJson<ContextT>(json: JsonValue, visitor: JsonVisitor, schema?: JsonObject, refResolver?: ReferenceResolver<ContextT>, context?: ContextT): Observable<JsonValue>;

  // (undocumented)
  export function visitJsonSchema(schema: JsonObject, visitor: JsonSchemaVisitor): void;

}

// @public
export function split(path: Path): PathFragment[];

// @public
module strings {
  export function camelize(str: string): string;

  export function capitalize(str: string): string;

  export function classify(str: string): string;

  export function dasherize(str: string): string;

  export function decamelize(str: string): string;

  export function levenshtein(a: string, b: string): number;

  export function underscore(str: string): string;

}

// @public
module tags {
  // (undocumented)
  export function indentBy(indentations: number): TemplateTag;

  // (undocumented)
  export function oneLine(strings: TemplateStringsArray, ...values: any[]): string;

  // (undocumented)
  export function stripIndent(strings: TemplateStringsArray, ...values: any[]): string;

  // (undocumented)
  export function stripIndents(strings: TemplateStringsArray, ...values: any[]): string;

  interface TemplateTag<R = string> {
    // (undocumented)
    (template: TemplateStringsArray, ...substitutions: any[]): R;
  }

  // (undocumented)
  export function trimNewlines(strings: TemplateStringsArray, ...values: any[]): string;

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

// WARNING: Unsupported export: reset
// WARNING: Unsupported export: bold
// WARNING: Unsupported export: dim
// WARNING: Unsupported export: italic
// WARNING: Unsupported export: underline
// WARNING: Unsupported export: inverse
// WARNING: Unsupported export: hidden
// WARNING: Unsupported export: strikethrough
// WARNING: Unsupported export: black
// WARNING: Unsupported export: red
// WARNING: Unsupported export: green
// WARNING: Unsupported export: yellow
// WARNING: Unsupported export: blue
// WARNING: Unsupported export: magenta
// WARNING: Unsupported export: cyan
// WARNING: Unsupported export: white
// WARNING: Unsupported export: grey
// WARNING: Unsupported export: gray
// WARNING: Unsupported export: bgBlack
// WARNING: Unsupported export: bgRed
// WARNING: Unsupported export: bgGreen
// WARNING: Unsupported export: bgYellow
// WARNING: Unsupported export: bgBlue
// WARNING: Unsupported export: bgMagenta
// WARNING: Unsupported export: bgCyan
// WARNING: Unsupported export: bgWhite
// @public
module terminal {
  // WARNING: Unsupported export: reset
  // WARNING: Unsupported export: bold
  // WARNING: Unsupported export: dim
  // WARNING: Unsupported export: italic
  // WARNING: Unsupported export: underline
  // WARNING: Unsupported export: inverse
  // WARNING: Unsupported export: hidden
  // WARNING: Unsupported export: strikethrough
  // WARNING: Unsupported export: black
  // WARNING: Unsupported export: red
  // WARNING: Unsupported export: green
  // WARNING: Unsupported export: yellow
  // WARNING: Unsupported export: blue
  // WARNING: Unsupported export: magenta
  // WARNING: Unsupported export: cyan
  // WARNING: Unsupported export: white
  // WARNING: Unsupported export: grey
  // WARNING: Unsupported export: gray
  // WARNING: Unsupported export: bgBlack
  // WARNING: Unsupported export: bgRed
  // WARNING: Unsupported export: bgGreen
  // WARNING: Unsupported export: bgYellow
  // WARNING: Unsupported export: bgBlue
  // WARNING: Unsupported export: bgMagenta
  // WARNING: Unsupported export: bgCyan
  // WARNING: Unsupported export: bgWhite
  // (undocumented)
  module colors {
  }

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

// WARNING: Unsupported export: fileBuffer
// WARNING: Unsupported export: FileBuffer
// WARNING: Unsupported export: FileBufferLike
// WARNING: Unsupported export: Stats
// WARNING: Unsupported export: ReplacementFunction
// WARNING: Unsupported export: CordHostRecord
// @public
module virtualFs {
  class AliasHost<StatsT extends object = {}> extends ResolverHost<StatsT> {
    // (undocumented)
    protected _aliases: Map<Path, Path>;
    // (undocumented)
    protected _resolve(path: Path): Path;
    // (undocumented)
    readonly aliases: Map<Path, Path>;
  }

  class CordHost extends SimpleMemoryHost {
    // WARNING: The type "ReadonlyHost" needs to be exported by the package (e.g. added to index.ts)
    constructor(_back: ReadonlyHost);
    // WARNING: The type "ReadonlyHost" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _back: ReadonlyHost;
    // (undocumented)
    protected _filesToCreate: Set<Path>;
    // (undocumented)
    protected _filesToDelete: Set<Path>;
    // (undocumented)
    protected _filesToOverwrite: Set<Path>;
    // (undocumented)
    protected _filesToRename: Map<Path, Path>;
    // (undocumented)
    protected _filesToRenameRevert: Map<Path, Path>;
    // WARNING: The type "ReadonlyHost" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly backend: ReadonlyHost;
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // WARNING: The type "CordHost" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "CordHost" needs to be exported by the package (e.g. added to index.ts)
    clone(): CordHost;
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    commit(host: Host, force?: boolean): Observable<void>;
    // WARNING: Unable to find a documentation file ("CordHost.api.json") for the referenced package
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    create(path: Path, content: FileBuffer): Observable<void>;
    // (undocumented)
    delete(path: Path): Observable<void>;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    overwrite(path: Path, content: FileBuffer): Observable<void>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // WARNING: The type "CordHostRecord" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    records(): CordHostRecord[];
    // (undocumented)
    rename(from: Path, to: Path): Observable<void>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats | null> | null;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    watch(path: Path, options?: HostWatchOptions): null;
    // (undocumented)
    willCreate(path: Path): boolean;
    // (undocumented)
    willDelete(path: Path): boolean;
    // (undocumented)
    willOverwrite(path: Path): boolean;
    // (undocumented)
    willRename(path: Path): boolean;
    // (undocumented)
    willRenameTo(path: Path, to: Path): boolean;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    write(path: Path, content: FileBuffer): Observable<void>;
  }

  // (undocumented)
  interface CordHostCreate {
    // (undocumented)
    content: FileBuffer;
    // (undocumented)
    kind: 'create';
    // (undocumented)
    path: Path;
  }

  // (undocumented)
  interface CordHostDelete {
    // (undocumented)
    kind: 'delete';
    // (undocumented)
    path: Path;
  }

  // (undocumented)
  interface CordHostOverwrite {
    // (undocumented)
    content: FileBuffer;
    // (undocumented)
    kind: 'overwrite';
    // (undocumented)
    path: Path;
  }

  // (undocumented)
  interface CordHostRename {
    // (undocumented)
    from: Path;
    // (undocumented)
    kind: 'rename';
    // (undocumented)
    to: Path;
  }

  // (undocumented)
  class Empty implements ReadonlyHost {
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats<{}> | null>;
  }

  // (undocumented)
  export function fileBufferToString(fileBuffer: FileBuffer): string;

  // (undocumented)
  interface Host<StatsT extends object = {}> extends ReadonlyHost<StatsT> {
    // (undocumented)
    delete(path: Path): Observable<void>;
    // (undocumented)
    rename(from: Path, to: Path): Observable<void>;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
    // WARNING: The type "FileBufferLike" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    write(path: Path, content: FileBufferLike): Observable<void>;
  }

  // (undocumented)
  interface HostCapabilities {
    // (undocumented)
    synchronous: boolean;
  }

  // (undocumented)
  interface HostWatchEvent {
    // (undocumented)
    readonly path: Path;
    // (undocumented)
    readonly time: Date;
    // (undocumented)
    readonly type: HostWatchEventType;
  }

  // (undocumented)
  enum HostWatchEventType {
    // (undocumented)
    Changed = 0,
    // (undocumented)
    Created = 1,
    // (undocumented)
    Deleted = 2,
    // (undocumented)
    Renamed = 3
  }

  // (undocumented)
  interface HostWatchOptions {
    // (undocumented)
    readonly persistent?: boolean;
    // (undocumented)
    readonly recursive?: boolean;
  }

  // (undocumented)
  class PatternMatchingHost<StatsT extends object = {}> extends ResolverHost<StatsT> {
    // WARNING: The type "ReplacementFunction" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _patterns: Map<RegExp, ReplacementFunction>;
    // (undocumented)
    protected _resolve(path: Path): Path;
    // WARNING: The type "ReplacementFunction" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    addPattern(pattern: string | string[], replacementFn: ReplacementFunction): void;
  }

  // (undocumented)
  interface ReadonlyHost<StatsT extends object = {}> {
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats<StatsT> | null> | null;
  }

  class ResolverHost<T extends object> implements Host<T> {
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    constructor(_delegate: Host<T>);
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _delegate: Host<T>;
    // (undocumented)
    protected abstract _resolve(path: Path): Path;
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // (undocumented)
    delete(path: Path): Observable<void>;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // (undocumented)
    rename(from: Path, to: Path): Observable<void>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats<T> | null> | null;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    write(path: Path, content: FileBuffer): Observable<void>;
  }

  class SafeReadonlyHost<StatsT extends object = {}> implements ReadonlyHost<StatsT> {
    // WARNING: The type "ReadonlyHost" needs to be exported by the package (e.g. added to index.ts)
    constructor(_delegate: ReadonlyHost<StatsT>);
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats<StatsT> | null> | null;
  }

  // (undocumented)
  class ScopedHost<T extends object> extends ResolverHost<T> {
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    constructor(delegate: Host<T>, _root?: Path);
    // (undocumented)
    protected _resolve(path: Path): Path;
    // (undocumented)
    protected _root: Path;
  }

  // (undocumented)
  class SimpleMemoryHost implements Host<{}> {
    constructor();
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "SimpleMemoryHostStats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _cache: Map<Path, Stats<SimpleMemoryHostStats>>;
    // (undocumented)
    protected _delete(path: Path): void;
    // (undocumented)
    protected _exists(path: Path): boolean;
    // (undocumented)
    protected _isDirectory(path: Path): boolean;
    // (undocumented)
    protected _isFile(path: Path): boolean;
    // (undocumented)
    protected _list(path: Path): PathFragment[];
    // (undocumented)
    protected _newDirStats: {
      atime: Date;
      birthtime: Date;
      content: null;
      ctime: Date;
      inspect(): string;
      isDirectory(): boolean;
      isFile(): boolean;
      mtime: Date;
      size: number;
    }
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "SimpleMemoryHostStats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _newFileStats: {
      atime: Date;
      birthtime: Date;
      content: ArrayBuffer;
      ctime: Date;
      inspect(): string;
      isDirectory(): boolean;
      isFile(): boolean;
      mtime: Date;
      size: number;
    }
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _read(path: Path): FileBuffer;
    // (undocumented)
    protected _rename(from: Path, to: Path): void;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "SimpleMemoryHostStats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _stat(path: Path): Stats<SimpleMemoryHostStats> | null;
    // (undocumented)
    protected _toAbsolute(path: Path): Path;
    // WARNING: The type "HostWatchEventType" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _updateWatchers(path: Path, type: HostWatchEventType): void;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    protected _write(path: Path, content: FileBuffer): void;
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // (undocumented)
    delete(path: Path): Observable<void>;
    // (undocumented)
    exists(path: Path): Observable<boolean>;
    // (undocumented)
    isDirectory(path: Path): Observable<boolean>;
    // (undocumented)
    isFile(path: Path): Observable<boolean>;
    // (undocumented)
    list(path: Path): Observable<PathFragment[]>;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): Observable<FileBuffer>;
    // (undocumented)
    rename(from: Path, to: Path): Observable<void>;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Observable<Stats<{}> | null> | null;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    write(path: Path, content: FileBuffer): Observable<void>;
  }

  // (undocumented)
  interface SimpleMemoryHostStats {
    // (undocumented)
    readonly content: FileBuffer | null;
  }

  // (undocumented)
  export function stringToFileBuffer(str: string): FileBuffer;

  class SyncDelegateHost<T extends object = {}> {
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    constructor(_delegate: Host<T>);
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    protected _delegate: Host<T>;
    // (undocumented)
    protected _doSyncCall<ResultT>(observable: Observable<ResultT>): ResultT;
    // WARNING: The type "HostCapabilities" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly capabilities: HostCapabilities;
    // WARNING: The type "Host" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    readonly delegate: Host<T>;
    // (undocumented)
    delete(path: Path): void;
    // (undocumented)
    exists(path: Path): boolean;
    // (undocumented)
    isDirectory(path: Path): boolean;
    // (undocumented)
    isFile(path: Path): boolean;
    // (undocumented)
    list(path: Path): PathFragment[];
    // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    read(path: Path): FileBuffer;
    // (undocumented)
    rename(from: Path, to: Path): void;
    // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    stat(path: Path): Stats<T> | null;
    // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
    // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
    // WARNING: The type "FileBufferLike" needs to be exported by the package (e.g. added to index.ts)
    // (undocumented)
    write(path: Path, content: FileBufferLike): void;
  }

  // (undocumented)
  class SynchronousDelegateExpectedException extends BaseException {
    constructor();
  }

  // WARNING: Unsupported export: TestLogRecord
  module test {
    // (undocumented)
    class TestHost extends SimpleMemoryHost {
      constructor(map?: {
              [path: string]: string;
          });
      // (undocumented)
      protected _delete(path: Path): void;
      // (undocumented)
      protected _exists(path: Path): boolean;
      // (undocumented)
      protected _isDirectory(path: Path): boolean;
      // (undocumented)
      protected _isFile(path: Path): boolean;
      // (undocumented)
      protected _list(path: Path): PathFragment[];
      // (undocumented)
      protected _read(path: Path): ArrayBuffer;
      // WARNING: The type "TestLogRecord" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      protected _records: TestLogRecord[];
      // (undocumented)
      protected _rename(from: Path, to: Path): void;
      // WARNING: The type "Stats" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "SimpleMemoryHostStats" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      protected _stat(path: Path): Stats<SimpleMemoryHostStats> | null;
      // WARNING: The type "SyncDelegateHost" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      protected _sync: SyncDelegateHost<{}>;
      // WARNING: The type "HostWatchOptions" needs to be exported by the package (e.g. added to index.ts)
      // WARNING: The type "HostWatchEvent" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      protected _watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent>;
      // WARNING: The type "FileBuffer" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      protected _write(path: Path, content: FileBuffer): void;
      // WARNING: The name "$exists" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $exists(path: string): boolean;
      // WARNING: The name "$isDirectory" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $isDirectory(path: string): boolean;
      // WARNING: The name "$isFile" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $isFile(path: string): boolean;
      // WARNING: The name "$list" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $list(path: string): PathFragment[];
      // WARNING: The name "$read" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $read(path: string): string;
      // WARNING: The name "$write" contains unsupported characters; API names should use only letters, numbers, and underscores
      // (undocumented)
      $write(path: string, content: string): void;
      // (undocumented)
      clearRecords(): void;
      // WARNING: The type "TestHost" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      clone(): TestHost;
      // (undocumented)
      readonly files: Path[];
      // WARNING: The type "TestLogRecord" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      readonly records: TestLogRecord[];
      // WARNING: The type "SyncDelegateHost" needs to be exported by the package (e.g. added to index.ts)
      // (undocumented)
      readonly sync: SyncDelegateHost<{}>;
    }

  }

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
