## snakeCase

Convert string to "snakeCase".

<details>
<summary>Type Definition</summary>

```typescript
function snakeCase(str: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```
