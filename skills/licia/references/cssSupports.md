## cssSupports

Check if browser supports a given CSS feature.

<details>
<summary>Type Definition</summary>

```typescript
function cssSupports(name: string, val?: string): boolean;
```

</details>

|Name  |Desc              |
|------|------------------|
|name  |Css property name |
|val   |Css property value|
|return|True if supports  |

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```
