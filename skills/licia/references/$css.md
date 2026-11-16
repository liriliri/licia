## $css

Element css manipulation.

<details>
<summary>Type Definition</summary>

```typescript
function $css(element: $safeEls.El, name: string): string;
function $css(
    element: $safeEls.El,
    name: string,
    val: string
): void;
function $css(
    element: $safeEls.El,
    properties: types.PlainObj<string | number>
): void;
```

</details>

Get the computed style properties for the first element in the set of matched elements.

|Name   |Desc                      |
|-------|--------------------------|
|element|Elements to manipulate    |
|name   |Property name             |
|return |Css value of first element|

Set one or more CSS properties for the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Property name         |
|val    |Css value             |

|Name      |Desc                            |
|----------|--------------------------------|
|element   |Elements to manipulate          |
|properties|Object of css-value pairs to set|

```javascript
$css('#test', {
    color: '#fff',
    background: 'black',
    opacity: 0.5
});
$css('#test', 'display', 'block');
$css('#test', 'color'); // -> #fff
```
