## extendDeep

Recursive object extending.

<details>
<summary>Type Definition</summary>

```typescript
function extendDeep(destination: any, ...sources: any[]): any;
```

</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extendDeep(
    {
        name: 'RedHood',
        family: {
            mother: 'Jane',
            father: 'Jack'
        }
    },
    {
        family: {
            brother: 'Bruce'
        }
    }
);
// -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
```
