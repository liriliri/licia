## highlight

Highlight code.

<details>
<summary>Type Definition</summary>

```typescript
function highlight(
    str: string,
    lang?: string,
    style?: {
        comment?: string;
        string?: string;
        number?: string;
        keyword?: string;
        operator?: string;
    }
): string;
```

</details>

|Name   |Desc                        |
|-------|----------------------------|
|str    |Code string                 |
|lang=js|Language, js, html or css   |
|style  |Keyword highlight style     |
|return |Highlighted html code string|

Available styles:

comment, string, number, keyword, operator

```javascript
highlight('const a = 5;', 'js', {
    keyword: 'color:#569cd6;'
}); // -> '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
```
