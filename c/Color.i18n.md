## CN

Color converter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|color|string object|Color to convert|

### toRgb

Get color rgb string format.

### toHex

Get color hex string format.

### toHsl

Get color hsl string format.

### parse

[static] Parse color string into object containing value and model.

|Name  |Type  |Desc                             |
|------|------|---------------------------------|
|color |string|Color string                     |
|返回值|object|Object containing value and model|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
var color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```
