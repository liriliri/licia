## $safeEls

Convert value into an array, if it's a string, do querySelector.

<details>
<summary>Type Definition</summary>

```typescript
namespace $safeEls {
    type El = Element | Element[] | NodeListOf<Element> | string;
}
function $safeEls(val: $safeEls.El): Element[];
```

</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to convert |
|return|Array of elements|

```javascript
$safeEls(document.querySelector('.test'));
$safeEls(document.querySelectorAll('.test'));
$safeEls('.test'); // -> Array of elements with test class
```
