## $data

Wrapper of $attr, adds data- prefix to keys.

<details>
<summary>Type Definition</summary>

```typescript
function $data(
    element: $safeEls.El,
    name: string,
    value: string
): void;
function $data(
    element: $safeEls.El,
    attributes: types.PlainObj<string>
): void;
function $data(element: $safeEls.El, name: string): string;
```

</details>

```javascript
$data('#test', 'attr1', 'eustia');
```
