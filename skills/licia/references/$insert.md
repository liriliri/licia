## $insert

Insert html on different position.

<details>
<summary>Type Definition</summary>

```typescript
namespace $insert {
    type IInsert = (element: $safeEls.El, content: string | Element) => void;
}
const $insert: {
    before: $insert.IInsert;
    after: $insert.IInsert;
    append: $insert.IInsert;
    prepend: $insert.IInsert;
};
```

</details>

### before

Insert content before elements.

### after

Insert content after elements.

### prepend

Insert content to the beginning of elements.

### append

Insert content to the end of elements.

|Name   |Desc                   |
|-------|-----------------------|
|element|Elements to manipulate |
|content|Html strings or element|

```javascript
// <div id="test"><div class="mark"></div></div>
$insert.before('#test', '<div>licia</div>');
// -> <div>licia</div><div id="test"><div class="mark"></div></div>
$insert.after('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div></div><div>licia</div>
$insert.prepend('#test', '<div>licia</div>');
// -> <div id="test"><div>licia</div><div class="mark"></div></div>
$insert.append('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div><div>licia</div></div>
```
