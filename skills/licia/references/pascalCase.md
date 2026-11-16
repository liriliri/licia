## pascalCase

Convert string to "pascalCase".

<details>
<summary>Type Definition</summary>

```typescript
function pascalCase(str: string): string;
```

</details>

|Name  |Desc               |
|------|-------------------|
|str   |String to convert  |
|return|Pascal cased string|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```
