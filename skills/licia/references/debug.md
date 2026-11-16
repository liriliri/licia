## debug

A tiny JavaScript debugging utility.

<details>
<summary>Type Definition</summary>

```typescript
function debug(name: string): any;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|name  |Namespace                      |
|return|Function to print decorated log|

```javascript
const d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```
