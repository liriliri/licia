## Select

Simple wrapper of querySelectorAll to make dom selection easier.

<details>
<summary>Type Definition</summary>

```typescript
class Select {
    constructor(selector: string | Element | Document);
    find(selector: string): Select;
    each(fn: types.AnyFn): Select;
}
```

</details>

### constructor

|Name    |Desc               |
|--------|-------------------|
|selector|Dom selector string|

### find

Get desdendants of current matched elements.

|Name    |Desc               |
|--------|-------------------|
|selector|Dom selector string|

### each

Iterate over matched elements.

|Name|Desc                                |
|----|------------------------------------|
|fn  |Function to execute for each element|

```javascript
const $test = new Select('#test');
$test.find('.test').each(function(idx, element) {
    // Manipulate dom nodes
});
```
