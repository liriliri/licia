## $offset

Get the position of the element in document.

<details>
<summary>Type Definition</summary>

```typescript
namespace $offset {
    interface IOffset {
        left: number;
        top: number;
        width: number;
        height: number;
    }
}
function $offset(element: $safeEls.El): $offset.IOffset;
```

</details>

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to get offset|
|return |Element position      |

```javascript
$offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
```
