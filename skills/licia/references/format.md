## format

Format string in a printf-like format.

<details>
<summary>Type Definition</summary>

```typescript
function format(str: string, ...values: any[]): string;
```

</details>

|Name     |Desc                               |
|---------|-----------------------------------|
|str      |String to format                   |
|...values|Values to replace format specifiers|
|return   |Formatted string                   |

### Format Specifiers

|Specifier|Desc                |
|---------|--------------------|
|%s       |String              |
|%d, %i   |Integer             |
|%f       |Floating point value|
|%o       |Object              |

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo_bar'
```
