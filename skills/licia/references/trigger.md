## trigger

Trigger browser events.

<details>
<summary>Type Definition</summary>

```typescript
function trigger(
    el: Element | Document,
    type: string,
    options?: any
): void;
function trigger(type: string, options?: any): void;
```

</details>

|Name       |Desc              |
|-----------|------------------|
|el=document|Element to trigger|
|type       |Event type        |
|options    |Options           |

```javascript
trigger(document.getElementById('test'), 'mouseup');
trigger('keydown', { keyCode: 65 });
```
