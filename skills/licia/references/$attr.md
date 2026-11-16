## $attr

Element attribute manipulation.

<details>
<summary>Type Definition</summary>

```typescript
namespace $attr {
    function remove(element: $safeEls.El, name: string): void;
}
function $attr(
    element: $safeEls.El,
    name: string,
    value: string
): void;
function $attr(
    element: $safeEls.El,
    attributes: types.PlainObj<string>
): void;
function $attr(element: $safeEls.El, name: string): string;
```

</details>

Get the value of an attribute for the first element in the set of matched elements.

|Name   |Desc                            |
|-------|--------------------------------|
|element|Elements to manipulate          |
|name   |Attribute name                  |
|return |Attribute value of first element|

Set one or more attributes for the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Attribute name        |
|val    |Attribute value       |

|Name      |Desc                                  |
|----------|--------------------------------------|
|element   |Elements to manipulate                |
|attributes|Object of attribute-value pairs to set|

### remove

Remove an attribute from each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Attribute name        |

```javascript
$attr('#test', 'attr1', 'test');
$attr('#test', 'attr1'); // -> test
$attr.remove('#test', 'attr1');
$attr('#test', {
    attr1: 'test',
    attr2: 'test'
});
```
