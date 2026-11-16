## fnArgs

Validate function arguments.

<details>
<summary>Type Definition</summary>

```typescript
function fnArgs(types: string[], args: any): void;
```

</details>

|Name |Desc           |
|-----|---------------|
|types|Argument types |
|args |Argument object|

It throws an exception when validation failed.

```javascript
function test(a, b, c) {
    fnArgs(['number|string', '?Function', '...number'], arguments);
    // Do something.
}
test(15);
test('test', () => {});
test('test', () => {}, 5);
test(); // Throw error
test('test', 'test'); // Throw error
test('test', () => {}, 5, 'test'); // Throw error
```
