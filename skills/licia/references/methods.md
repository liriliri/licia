## methods

Return a sorted list of the names of every method in an object.

<details>
<summary>Type Definition</summary>

```typescript
function methods(obj: any): string[];
```

</details>

|Name  |Desc                    |
|------|------------------------|
|obj   |Object to check         |
|return|Function names in object|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```
