## extendOwn

Like extend, but only copies own properties over to the destination object.

<details>
<summary>Type Definition</summary>

```typescript
function extendOwn(destination: any, ...sources: any[]): any;
```

</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extendOwn({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```
