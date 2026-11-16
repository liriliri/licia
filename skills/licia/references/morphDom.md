## morphDom

Morph a dom tree to match a target dom tree.

<details>
<summary>Type Definition</summary>

```typescript
function morphDom(from: Node, to: Node | string): Node;
```

</details>

|Name  |Type              |
|------|------------------|
|from  |Node to morph     |
|to    |Node to be morphed|
|return|Morphed node      |

```javascript
const el1 = document.createElement('div');
el1.className = 'test';
const el2 = document.createElement('div');
el2.className = 'licia';
morphDom(el1, el2);
console.log(el1.className); // -> 'licia'
```
