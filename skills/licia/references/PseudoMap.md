## PseudoMap

Like es6 Map, without iterators.

<details>
<summary>Type Definition</summary>

```typescript
const PseudoMap: typeof Map;
```

</details>

It supports only string keys, and uses Map if exists.

```javascript
const map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```
