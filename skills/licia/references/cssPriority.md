## cssPriority

Calculate and compare priority of css selector/rule.

<details>
<summary>Type Definition</summary>

```typescript
namespace cssPriority {
    function compare(p1: number[], p2: number[]): number;
}
function cssPriority(
    selector: string,
    options?: {
        important?: boolean;
        inlineStyle?: boolean;
        position?: number;
    }
): number[];
```

</details>

|Name    |Type           |
|--------|---------------|
|selector|CSS selector   |
|options |Rule extra info|
|return  |Priority array |

Priority array contains five number values.

1. Important mark
2. Inline style
3. ID selector
4. Class selectors
5. Type selectors
6. Rule position

### compare

Compare priorities.

|Name  |Desc               |
|------|-------------------|
|p1    |Priority to compare|
|p2    |Priority to compare|
|return|Comparison result  |

```javascript
cssPriority('a.button > i.icon:before', {
    important: true,
    inlineStyle: false,
    position: 100
}); // -> [1, 0, 0, 2, 3, 100]
```
