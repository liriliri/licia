## unzip

Opposite of zip.

<details>
<summary>Type Definition</summary>

```typescript
declare function unzip(arr: Array<any[]>): Array<any[]>;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|arr   |Array of grouped elements to process|
|return|New array of regrouped elements     |

```javascript
unzip([
    ['a', 1, true],
    ['b', 2, false]
]); // -> [['a', 'b'], [1, 2], [true, false]]
```
