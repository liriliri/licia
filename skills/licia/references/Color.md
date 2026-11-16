## Color

Color converter.

<details>
<summary>Type Definition</summary>

```typescript
namespace Color {
    interface IColor {
        val: number[];
        model: string;
    }
}
class Color {
    constructor(color: string | Color.IColor);
    toRgb(): string;
    toHex(): string;
    toHsl(): string;
    static parse(colorStr: string): Color.IColor;
}
```

</details>

### constructor

|Name |Desc            |
|-----|----------------|
|color|Color to convert|

### toRgb

Get color rgb string format.

### toHex

Get color hex string format.

### toHsl

Get color hsl string format.

### parse

[static] Parse color string into object containing value and model.

|Name  |Desc                             |
|------|---------------------------------|
|color |Color string                     |
|return|Object containing value and model|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
const color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```
