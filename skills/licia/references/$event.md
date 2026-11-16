## $event

bind events to certain dom elements.

<details>
<summary>Type Definition</summary>

```typescript
const $event: {
    on(
        element: $safeEls.El,
        event: string,
        selector: string,
        handler: types.AnyFn
    ): void;
    on(element: $safeEls.El, event: string, handler: types.AnyFn): void;
    off(
        element: $safeEls.El,
        event: string,
        selector: string,
        handler: types.AnyFn
    ): void;
    off(element: $safeEls.El, event: string, handler: types.AnyFn): void;
};
```

</details>

```javascript
function clickHandler() {
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```
