## CN

querySelectorAll 的简单包装类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|selector|string|选择器|

### find

查找子元素。

|参数名|类型|说明|
|-----|----|---|
|selector|string|选择器|

### each

遍历匹配的元素。

|参数名|类型|说明|
|-----|----|---|
|fn|function|调用函数|

```javascript
var $test = new Select('#test');
$test.find('.test').each(function (idx, element) {
    // Manipulate dom nodes
});
```