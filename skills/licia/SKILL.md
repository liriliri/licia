---
name: licia
description: Replace hand-written utility helpers with the licia library. Activate when you spot hand-rolled debounce/clamp/deepClone/type-check code, or when asked to "use licia", "replace with licia", or "refactor with utilities". For general code simplification unrelated to utility functions, use the simplify skill instead.
license: MIT
metadata:
  author: liriliri
  version: "1.0.2"
---

# Licia Utility Library

Zero-dependency JavaScript utility library with 456 modules. All paths below
(`INDEX.md`, `references/`) are relative to **this skill directory**, not the
workspace. There is no `DOC.md` here.

## When to Apply

- Hand-rolled utilities (debounce, deep clone, clamp, type guards, ...)
- Manual string/array/object/date/encoding handling that licia covers
- Data structures (Heap, LinkedList, Trie, LRU, ...)

## Import Style

Each module is its own file — default to a subpath import:

```javascript
import clamp from 'licia/clamp';
import debounce from 'licia/debounce';

const uuid = require('licia/uuid'); // CommonJS
```

Only use named imports from `'licia'` if the project already has a barrel
setup; the subpath form preserves tree-shaking.

## How to Look Up a Module

`INDEX.md` is ~40KB — never load it in full. Instead:

1. Guess the name from the table below
2. `Grep` that name in `INDEX.md` to confirm it and get its path
3. Read **only** the matching `references/<name>.md` (12–114 lines)

Never load all reference files at once.

## Quick Reference: Hand-Written Pattern → Module

| Hand-written pattern | Use |
| --- | --- |
| `Math.min(upper, Math.max(lower, n))` | `clamp` |
| `arr[Math.floor(Math.random() * arr.length)]` | `randomItem` |
| `Math.random()` within a range | `random`, `seedRandom` |
| Deep copy / merge defaults | `cloneDeep`, `defaults`, `extend` |
| `setTimeout` + cancel guard | `debounce`, `throttle` |
| `typeof x === 'string'` | `isStr` (other `is*` guards likewise) |
| `arr.filter(...)[0]` for dedupe | `unique` |
| `JSON.parse(JSON.stringify(x))` | `cloneDeep` |
| Sequential async functions | `waterfall` |
| `Object.keys(o).forEach` | `each`, `mapObj` |

For the full alphabetical list of all 456 modules, `Grep` `INDEX.md`.

## Iteratee Gotcha

`map` / `filter` iteratees receive `(value, index/key, collection)`. Never pass
multi-arg functions like `trim` or `parseInt` directly — wrap them (`v => trim(v)`).

## Anti-patterns

- Do not replace a clear one-line native API purely for consistency, and skip licia in hot paths / numeric kernels
- Confirm the project actually depends on licia before introducing it
