## cmpVersion

Compare version strings.

<details>
<summary>Type Definition</summary>

```typescript
function cmpVersion(v1: string, v2: string): number;
```

</details>

|Name  |Desc              |
|------|------------------|
|v1    |Version to compare|
|v2    |Version to compare|
|return|Comparison result |

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```
