## vlq

Variable-length quantity encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const vlq: {
    encode(number: number | number[]): string;
    decode(string: string): number[];
};
```

</details>

### encode

Encode numbers into vlq string.

|Name  |Desc            |
|------|----------------|
|number|Number to encode|
|return|Encoded string  |

### decode

Decode vlq string into numbers.

|Name  |Desc            |
|------|----------------|
|string|String to decode|
|return|Decoded numbers |

```javascript
vlq.encode(123); // -> '2H'
vlq.encode([123, 456, 789]); // -> '2HwcqxB'
vlq.decode('2H'); // -> [123]
vlq.decode('2HwcqxB'); // -> [123, 456, 789]
```
