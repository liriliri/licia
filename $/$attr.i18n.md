## CN

操作元素属性。

获取元素集中第一个元素的指定属性值。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|
|返回值|string|第一个元素的属性值|

设置元素集中一个或多个属性的值。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|
|value|string|属性值|

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|attributes|object|包含多个要设置属性-值对的对象|

### remove

对元素集中的所有元素，移除指定的属性。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|

```javascript
$attr('#test', 'attr1', 'test');
$attr('#test', 'attr1'); // -> test
$attr.remove('#test', 'attr1');
$attr('#test', {
    'attr1': 'test',
    'attr2': 'test'
});
```