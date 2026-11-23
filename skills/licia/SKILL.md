---
name: licia
description: Replace hand-written utility helpers with the licia library. Activate when you spot hand-rolled debounce/clamp/deepClone/type-check code, or when asked to "use licia", "replace with licia", or "refactor with utilities". For general code simplification unrelated to utility functions, use the simplify skill instead.
license: MIT
metadata:
  author: liriliri
  version: "1.1.0"
---

# Licia Utility Library

Zero-dependency JavaScript utility library with 458 modules. All paths below
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

`INDEX.md` is a Markdown table with **one row per module**:

```
| `clamp` | Clamp number within the inclusive lower and upper bounds. |
```

Columns: name, description. `INDEX.md` is the single source of truth for the
full alphabetical name list — there is no separate name list, and no line
numbers or bucket paths to maintain.

Bucket files under `references/` are grouped by first letter, and the bucket
is derived from the module name: take the lowercased first character; if it
is `a-z` use it as the bucket name, otherwise use `_` (e.g. `clamp` ->
`references/c.md`, `Benchmark` -> `references/b.md`, `$attr` ->
`references/_.md`). Each module's documentation in a bucket starts with a
`## <name>` heading.

**Step 1 — find the module name** by grepping `INDEX.md`. A matched row gives
the name and its description:

```
Grep "last element" INDEX.md        # capability keyword, when you don't know the name
Grep "empty" INDEX.md               # also: path, clone, random, string, ...
Grep '`clamp`' INDEX.md             # when you know or guessed the name
```

**Step 2 — derive the bucket file** from the name (rule above), then locate the
module inside it by grepping for the heading (use `-n` to get the line number):

```
Grep pattern="^## clamp$" path="references/c.md" -n
```

**Step 3 — read the module section.** `Read` the bucket with `offset` = the
heading's line number. To bound the read to this one module, grep the bucket
for all headings (`Grep pattern="^## " path="references/c.md" -n`) and use
the next heading's line number to pick `limit`; a module is typically 20–110
lines. If the module is the last in its bucket, read to end of file.

These line numbers come from Grep on the current file, not from `INDEX.md` —
so they are always accurate regardless of how the docs have shifted.

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
