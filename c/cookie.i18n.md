## CN

Simple api for handling browser cookies.

### get

Get cookie value.

|参数名|类型|说明|
|-----|----|---|
|key   |string|Cookie key                |
|返回值|string|Corresponding cookie value|

### set

Set cookie value.

|参数名|类型|说明|
|-----|----|---|
|key      |string |Cookie key    |
|val      |string |Cookie value  |
|[options]|object |Cookie options|
|返回值   |exports|Module cookie |

### remove

Remove cookie value.

|参数名|类型|说明|
|-----|----|---|
|key      |string |Cookie key    |
|[options]|object |Cookie options|
|返回值   |exports|Module cookie |

```javascript
cookie.set('a', '1', {path: '/'});
cookie.get('a'); // -> '1'
cookie.remove('a');
```