## invariant

Facebook's invariant.

<details>
<summary>Type Definition</summary>

```typescript
function invariant(
    condition: boolean,
    format?: string,
    a?: string,
    b?: string,
    c?: string,
    d?: string,
    e?: string,
    f?: string
): void;
```

</details>

[Related docs](https://github.com/zertosh/invariant)

```javascript
invariant(true, 'This will not throw');
// No errors
invariant(false, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```
