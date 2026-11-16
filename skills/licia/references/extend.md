## extend

Copy all of the properties in the source objects over to the destination object.

<details>
<summary>Type Definition</summary>

```typescript
function extend<T, T1>(destination: T, source1: T1): T & T1;
function extend<T, T1, T2>(
    destination: T,
    source1: T1,
    source2: T2
): T & T1 & T2;
function extend<T, T1, T2, T3>(
    destination: T,
    source1: T1,
    source2: T2,
    source3: T3
): T & T1 & T2 & T3;
function extend(destination: any, ...sources: any[]): any;
```

</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extend({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```
