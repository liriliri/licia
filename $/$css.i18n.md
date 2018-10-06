## CN

Element css manipulation.

Get the computed style properties for the first element in the set of matched elements.

|参数名|类型|说明|
|-----|----|---|
|element|string array element|Elements to manipulate    |
|name   |string              |Property name             |
|return |string              |Css value of first element|

Set one or more CSS properties for the set of matched elements.

|参数名|类型|说明|
|-----|----|---|
|element|string array element|Elements to manipulate|
|name   |string              |Property name         |
|value  |string              |Css value             |

|参数名|类型|说明|
|-----|----|---|
|element   |string array element|Elements to manipulate          |
|properties|object              |Object of css-value pairs to set|

```javascript
$css('#test', {
    'color': '#fff',
    'background': 'black'
});
$css('#test', 'display', 'block');
$css('#test', 'color'); // -> #fff
```
