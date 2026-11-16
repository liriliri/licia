## defaults

Fill in undefined properties in object with the first value present in the following list of defaults objects.

<details>
<summary>Type Definition</summary>

```typescript
function defaults<T, T1>(obj: T, source1: T1): T & T1;
function defaults<T, T1, T2>(
    obj: T,
    source1: T1,
    source2: T2
): T & T1 & T2;
function defaults<T, T1, T2, T3>(
    obj: T,
    source1: T1,
    source2: T2,
    source3: T3
): T & T1 & T2 & T3;
function defaults(obj: any, ...src: any[]): any;
```

</details>

|Name  |Desc              |
|------|------------------|
|obj   |Destination object|
|...src|Sources objects   |
|return|Destination object|

```javascript
defaults({ name: 'RedHood' }, { name: 'Unknown', age: 24 }); // -> {name: 'RedHood', age: 24}
```
