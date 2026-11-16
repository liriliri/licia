## className

Utility for conditionally joining class names.

<details>
<summary>Type Definition</summary>

```typescript
function className(
    ...names: Array<
        | string
        | number
        | boolean
        | null
        | undefined
        | { [key: string]: any }
        | Array<any>
    >
): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|names |Class names       |
|return|Joined class names|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', { b: false, c: true }); // -> 'a c'
className('a', ['b', 'c', { d: true, e: false }]); // -> 'a b c d';
```
