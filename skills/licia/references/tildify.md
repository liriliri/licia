## tildify

Convert absolute path to tilde path.

<details>
<summary>Type Definition</summary>

```typescript
function tildify(path: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|path  |Path to convert|
|return|Tilde path     |

```javascript
tildify('/home/surunzi/dev'); // -> '~/dev'
```
