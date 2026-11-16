## seedRandom

Seeded random number generator.

<details>
<summary>Type Definition</summary>

```typescript
function seedRandom(
    seed: number,
    min?: number,
    max?: number,
    floating?: boolean
): () => number;
```

</details>

|Name         |Desc                                          |
|-------------|----------------------------------------------|
|seed         |Random seed                                   |
|min=0        |Min possible value                            |
|max=1        |Maximum possible value                        |
|floating=true|Float or not                                  |
|return       |Function that generates random number sequence|

```javascript
const random = seedRandom(19920719, 0, 100, false);
random(); // -> 7
random(); // -> 68
```
