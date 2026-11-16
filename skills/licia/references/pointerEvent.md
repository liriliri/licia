## pointerEvent

Get the pointer event name, use touch and mouse events as a fallback if not supported.

<details>
<summary>Type Definition</summary>

```typescript
function pointerEvent(type: 'down' | 'move' | 'up'): string;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|type  |Event type, down, move or up|
|return|Pointer event name          |

```javascript
pointerEvent('down'); // -> 'pointerdown' if supported
```
