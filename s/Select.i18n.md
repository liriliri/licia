## CN

Simple wrapper of querySelectorAll to make dom selection easier.

### constructor

|参数名|类型|说明|
|-----|----|---|
|selector|string|Dom selector string|

### find

Get desdendants of current matched elements.

|参数名|类型|说明|
|-----|----|---|
|selector|string|Dom selector string|

### each

Iterate over matched elements.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function to execute for each element|

```javascript
var $test = new Select('#test');
$test.find('.test').each(function (idx, element)
{
    // Manipulate dom nodes
});
```