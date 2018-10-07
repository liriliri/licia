## CN

操作元素 class。

### add

对元素集中的所有元素，添加指定的 class。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|names|string array|添加的 class|

### has

判断元素集中是否有元素含有指定的 class。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|class 值|
|返回值|boolean|如果有，返回真|

### toggle

对于元素集中的每个元素，如果含有指定的 class 就将其删除，反之则添加。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|class 值|

### remove

对于元素集中的所有元素，移除指定的 class。


|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|names|string|class 值|

```javascript
$class.add('#test', 'class1');
$class.add('#test', ['class1', 'class2']);
$class.has('#test', 'class1'); // -> true
$class.remove('#test', 'class1');
$class.has('#test', 'class1'); // -> false
$class.toggle('#test', 'class1');
$class.has('#test', 'class1'); // -> true
```
