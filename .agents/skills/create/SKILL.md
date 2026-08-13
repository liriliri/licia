---
name: create
description: >-
  Create a new Licia utility module following project conventions. Use when
  adding a new module, scaffolding src/test/i18n/benchmark files, or when the
  user asks to 增加/新增/创建模块.
---

# Create Licia Module

Scaffold and finish a new Licia module end-to-end. Do not hand-edit generated metadata.

## Checklist

```
- [ ] Pick reference module(s) and `since` version
- [ ] Write src/<name>.js
- [ ] Write test/<name>.js
- [ ] Write i18n/<name>.md (required for DOC_CN)
- [ ] Optional: benchmark/<name>.js
- [ ] format → lint → test → update
- [ ] Verify generated files include the module
```

## 1. Prepare

1. Find a similar module in `src/` (same env / API shape) and mirror its style.
2. Confirm `src/<name>.js` does not already exist.
3. Set `since` to the **next** semver after `package.json` `version` (e.g. package `1.48.1` → `since: 1.49.0`).

CLI: prefer `licia <cmd> <moduleName>`. If `licia` is missing, use `node bin/licia.js`.

## 2. Source — `src/<name>.js`

```javascript
/* Short description.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |arg   |Arg meaning |
 * |return|Return value|
 */

/* example
 * name('input'); // -> 'output'
 */

/* module
 * env: all
 * since: X.Y.Z
 */

/* typescript
 * export declare function name(...): ...;
 */

_('dep1 dep2');

exports = function(...) { ... };
```

Rules:

- Header blocks are required: description table, `example`, `module`, `typescript`.
- `env`: `all` | `node` | `browser` (as needed).
- Declare deps with `_('a b')`, not npm imports. Node builtins via `eval('require')('...')` only when mirroring existing modules (e.g. `md5` / `sha1`).
- **Table cells: no trailing spaces before `|`.** Align columns; longest cell sets width (see `md5.js`).
- Prefer pure JS that works in browser; optional Node fast-path only when peers do (crypto hashes).

## 3. Test — `test/<name>.js`

Mirror peers. Simple APIs use `tests([...])`:

```javascript
tests([
    ['input', 'expected'],
    [util.strToBytes('input'), 'expected']
]);
```

Cover string / bytes / edge cases that the reference module covers.

## 4. i18n — `i18n/<name>.md` (manual)

`update` does **not** create this file. Without it, `DOC_CN.md` has no Chinese section.

```markdown
## CN

简短中文描述。

|参数名|说明|
|-----|---|
|arg|参数说明|
|返回值|返回值说明|
```

Match tone of a peer under `i18n/` (e.g. `md5.md`, `fnv1a.md`).

## 5. Benchmark (optional)

Add `benchmark/<name>.js` only if similar modules have one (`md5`, `crc32`, …).

```javascript
/* scripts
 * before: npm i --prefix .licia <compare-pkg>
 */

benchmark({
    name() { name(content); }
    // optional: other libs / node crypto
});
```

## 6. Finish

Run in order:

```bash
licia format <name>
licia lint <name>
licia test <name> -s --ts
licia test <name> -bs          # if env includes browser
npm run update                 # or: licia update
```

`npm run update` regenerates (do not edit by hand):

| File | Role |
|------|------|
| `index.json` | Module metadata / deps |
| `DOC.md` | English docs |
| `DOC_CN.md` | Chinese docs (needs `i18n/<name>.md`) |
| `cspell.json` | Spell dictionary |

After update, confirm `index.json` has the module and `DOC.md` / `DOC_CN.md` show it.

## Do / Don't

- **Do** copy structure from the closest existing module.
- **Do** create `i18n/<name>.md` before `npm run update`.
- **Don't** manually patch `index.json`, `DOC.md`, `DOC_CN.md`, or `cspell.json`.
- **Don't** leave trailing spaces inside doc tables.
- **Don't** commit unless the user asks.
