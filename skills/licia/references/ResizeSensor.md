## ResizeSensor

Detect if element's size has changed.

<details>
<summary>Type Definition</summary>

```typescript
class ResizeSensor extends SingleEmitter {
    constructor(el: HTMLElement);
    destroy(): void;
}
```

</details>

### constructor

|Name   |Desc                   |
|-------|-----------------------|
|element|Element to monitor size|

### destroy

Stop monitoring resize event.

```javascript
const target = document.getElementById('test');
const sensor = new ResizeSensor(target);
sensor.addListener(function() {
    // Trigger if element's size changed.
});
```
