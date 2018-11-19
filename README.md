#@microsoft/api-extractor POC

This is a POC of the API Extractor running against `@angular-devkit/core`.

## Get started
```sh
npm i
```

To verify the golden files run:
```sh
npm t
```

To update the golden files run:
```sh
npm t -- --accept
```

## Forseen Issues
- No way to strip out experimental APIs from being part of the golden files.
- Possibly non really errors:
```
src/utils/strings.d.ts(74,9): Expecting a TSDoc tag starting with "{@"
src/virtual-fs/host/alias.d.ts(54,22): The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
src/json/schema/visitor.d.ts(30,38): The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
```
- `The TSDoc tag "@license" is not defined in this configuration`. Ut seems there is no way to actually configure this. 

