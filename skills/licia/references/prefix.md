## prefix

Add vendor prefixes to a CSS attribute.

<details>
<summary>Type Definition</summary>

```typescript
namespace prefix {
    function dash(name: string): string;
}
function prefix(name: string): string;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|name  |Property name         |
|return|Prefixed property name|

### dash

Create a dasherize version.

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```
