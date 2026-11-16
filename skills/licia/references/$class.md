## $class

Element class manipulations.

<details>
<summary>Type Definition</summary>

```typescript
const $class: {
    add(element: $safeEls.El, name: string | string[]): void;
    has(element: $safeEls.El, name: string): boolean;
    toggle(element: $safeEls.El, name: string): void;
    remove(element: $safeEls.El, name: string): void;
};
```

</details>

### add

Add the specified class(es) to each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|names  |Classes to add        |

### has

Determine whether any of the matched elements are assigned the given class.

|Name   |Desc                                 |
|-------|-------------------------------------|
|element|Elements to manipulate               |
|name   |Class name                           |
|return |True if elements has given class name|

### toggle

Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Class name to toggle  |

### remove

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Class names to remove |

```javascript
$class.add('#test', 'class1');
$class.add('#test', ['class1', 'class2']);
$class.has('#test', 'class1'); // -> true
$class.remove('#test', 'class1');
$class.has('#test', 'class1'); // -> false
$class.toggle('#test', 'class1');
$class.has('#test', 'class1'); // -> true
```
