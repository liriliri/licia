## replaceAll

Replace all instance in a string.

<details>
<summary>Type Definition</summary>

```typescript
function replaceAll(
    str: string,
    substr: string,
    newSubstr: string
): string;
```

</details>

|Name     |Desc                               |
|---------|-----------------------------------|
|str      |Source string                      |
|substr   |String to be replaced              |
|newSubstr|String to replace substr           |
|return   |New string with all substr replaced|

```javascript
replaceAll('hello world goodbye world', 'world', 'licia'); // -> 'hello licia goodbye licia'
```
