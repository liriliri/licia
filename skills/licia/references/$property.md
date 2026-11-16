## $property

Element property html, text, val getter and setter.

<details>
<summary>Type Definition</summary>

```typescript
namespace $property {
    interface IProperty {
        (element: $safeEls.El, value: string): void;
        (element: $safeEls.El): string;
    }
}
const $property: {
    html: $property.IProperty;
    val: $property.IProperty;
    text: $property.IProperty;
};
```

</details>

### html

Get the HTML contents of the first element in the set of matched elements or
set the HTML contents of every matched element.

### text

Get the combined text contents of each element in the set of matched
elements, including their descendants, or set the text contents of the
matched elements.

### val

Get the current value of the first element in the set of matched elements or
set the value of every matched element.

```javascript
$property.html('#test', 'licia');
$property.html('#test'); // -> licia
```
