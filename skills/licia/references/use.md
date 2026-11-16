## use

Use modules that is created by define.

<details>
<summary>Type Definition</summary>

```typescript
function use(requires: string[], method: types.AnyFn): void;
function use(method: types.AnyFn): void;
```

</details>

|Name    |Desc                |
|--------|--------------------|
|requires|Dependencies        |
|method  |Codes to be executed|

```javascript
// define('A', () => 'A');
use(['A'], function(A) {
    console.log(A + 'B'); // -> 'AB'
});
```
