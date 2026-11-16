## delegate

Event delegation.

<details>
<summary>Type Definition</summary>

```typescript
const delegate: {
    add(el: Element, type: string, selector: string, cb: types.AnyFn): void;
    remove(el: Element, type: string, selector: string, cb: types.AnyFn): void;
};
```

</details>

### add

Add event delegation.

|Name    |Desc          |
|--------|--------------|
|el      |Parent element|
|type    |Event type    |
|selector|Match selector|
|cb      |Event callback|

### remove

Remove event delegation.

```javascript
const container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```
