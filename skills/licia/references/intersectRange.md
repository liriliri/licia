## intersectRange

Intersect two ranges.

<details>
<summary>Type Definition</summary>

```typescript
namespace intersectRange {
    interface IRange {
        start: number;
        end: number;
    }
}
function intersectRange(
    a: intersectRange.IRange,
    b: intersectRange.IRange
): intersectRange.IRange | void;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|a     |Range a              |
|b     |Range b              |
|return|Intersection if exist|

```javascript
intersectRange({ start: 0, end: 12 }, { start: 11, end: 13 });
// -> {start: 11, end: 12}
intersectRange({ start: 0, end: 5 }, { start: 6, end: 7 });
// -> undefined
```
