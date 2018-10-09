## CN

颜色转换。

### constructor

|参数名|类型|说明|
|-----|----|---|
|color|string object|要转换的颜色|

### toRgb

获取颜色 rgb 格式。

### toHex

获取颜色十六进制格式。

### toHsl

获取颜色 hsl 格式。

### parse

【静态】将颜色字符串转换为含有值及颜色模型的对象。

|参数名|类型|说明|
|-----|----|---|
|color|string|颜色字条串|
|返回值|object|含有值及颜色模型的对象|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
var color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```
