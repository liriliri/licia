## splitCase

Split different string case to an array.

<details>
<summary>Type Definition</summary>

```typescript
function splitCase(str: string): string[];
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to split|
|return|Result array   |

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```
