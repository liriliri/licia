## CN

Create a shallow-copied clone of the provided plain object.

Any nested objects or arrays will be copied by reference, not duplicated.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Value to clone|
|返回值|*   |Cloned value  |

```javascript
clone({name: 'eustia'}); // -> {name: 'eustia'}
```
