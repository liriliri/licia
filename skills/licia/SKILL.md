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

`INDEX.md` is a Markdown table with **one row per module**, and each row
already contains everything needed:

```
| `clamp` | Clamp number within the inclusive lower and upper bounds. | `references/c.md` | 537 | 29 |
```

Columns: name, description, bucket file, start line, line count. The bucket
files under `references/` are grouped by first letter (one per
letter plus `_` for symbols).

Prefer `Grep` on `INDEX.md` — a matched row is the complete record, so no
second lookup is needed:

```
Grep "last element" INDEX.md        # capability keyword, when you don't know the name
Grep "empty" INDEX.md               # also: path, clone, random, string, ...
Grep '`clamp`' INDEX.md             # when you know or guessed the name
```

Then `Read` the bucket with `offset` = the row's **Start line** and `limit` =
its **Lines**. These are columns *inside* the matched row — not the line number
Grep reported for that row.

`INDEX.md` is the single source of truth for the full alphabetical name list —
there is no separate name list in this skill.

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

## Iteratee Gotcha

`map` / `filter` iteratees receive `(value, index/key, collection)`. Never pass
multi-arg functions like `trim` or `parseInt` directly — wrap them (`v => trim(v)`).

## Anti-patterns

- Do not replace a clear one-line native API purely for consistency, and skip licia in hot paths / numeric kernels
- Confirm the project actually depends on licia before introducing it
