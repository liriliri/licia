# Licia - Project Guide for Code Agents

## Overview

Licia is a zero-dependency JavaScript utility library containing 455+ individual utility modules. Each module is independent and can be used standalone via the eustia build tool.

## Tech Stack

- **Language**: JavaScript (ES6+), TypeScript (type declarations)
- **Build Tool**: eustia (custom module bundler via `licia` CLI)
- **Test Framework**: Mocha + Chai (Node), Karma (Browser)
- **Coverage**: nyc + istanbul
- **Linter**: ESLint 8
- **Formatter**: Prettier
- **Transpiler**: Babel (for ES5 output)
- **Type Checking**: TypeScript 5.x (for `.d.ts` validation)
- **Node Types**: @types/node 20

## Project Structure

```
src/           # 455+ utility module source files (one file per module)
test/          # Test files (mirrors src/ structure, one test per module)
lib/           # Build scripts and tooling (build, test, lint, format, etc.)
bin/           # CLI entry point (licia command)
benchmark/     # Performance benchmarks
demo/          # Demo files
i18n/          # Internationalization
index.json     # Module metadata (dependencies, env, description)
tsconfig.json  # TypeScript config (for test:ts)
eslint.src.js  # ESLint config for source/lib
eslint.release.js # ESLint config for release builds
```

## Module Format

Each module in `src/` follows this structure:

```javascript
/* Description and API documentation (markdown table format) */

/* example
 * usage examples
 */

/* module
 * env: all|node|browser
 */

/* typescript
 * type declarations
 */

_('dependency1 dependency2');  // declare dependencies on other licia modules

exports = function(...) { ... };  // module export
```

## Licia CLI (Global Link)

This repo is globally linked via `npm link`, providing the `licia` command. The CLI supports per-module operations, which is the preferred way to develop and test individual modules:

```bash
# Format a single module (runs prettier + comment formatting)
licia format <moduleName>

# Lint a single module (eslint --fix on src and test file)
licia lint <moduleName>

# Test a single module in Node.js (-s for silent)
licia test <moduleName> -s

# Test a single module in browser
licia test <moduleName> -bs

# Test with TypeScript declaration check
licia test <moduleName> -s --ts

# Build a single module
licia build <moduleName>

# Run benchmark for a single module
licia benchmark <moduleName>
```

Without a module name, these commands operate on all modules.

### CLI Flags

| Flag | Short | Description |
|------|-------|-------------|
| --browser | -b | Run browser tests (Karma) |
| --silent | -s | Suppress verbose output |
| --all | -a | Include all modules |
| --sauce | | Use Sauce Labs for browser tests |
| --ts | | Include TypeScript declaration test |
| --release | -r | Test release build |
| --docker | -d | Use Docker environment |

## npm Scripts (Full Suite)

- `npm run test:node` - Run all Node.js tests
- `npm run test:browser` - Run all browser tests (Karma + Chrome)
- `npm run test:ts` - Validate all TypeScript declarations
- `npm test` - Run all tests (node + browser + release + ts)
- `npm run lint` - Lint source and lib files
- `npm run build` - Build release packages
- `npm run format` - Format all code with Prettier + licia format

## Notes

- Dependencies between modules are declared via `_('moduleName')` syntax, not npm packages.
- `index.json` contains the full dependency graph and metadata for all modules.
- The `.licia/` directory is a build output directory (generated, not committed).
- Each module targets a specific environment: `all`, `node`, or `browser` (declared in the module header).
