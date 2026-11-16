## emulateTouch

Emulate touch events on desktop browsers.

<details>
<summary>Type Definition</summary>

```typescript
function emulateTouch(el: Element): void;
```

</details>

|Name|Desc          |
|----|--------------|
|el  |Target element|

```javascript
const el = document.querySelector('#test');
emulateTouch(el);
el.addEventListener('touchstart', () => {}, false);
```
