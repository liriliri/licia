## CN

Document meta manipulation, turn name and content into key value pairs.

Get meta content with given name. If name is omitted, all pairs will be return.

|参数名|类型|说明|
|-----|----|---|
|[name]|string array|Meta name   |
|返回值|string      |Meta content|

Set meta content.

|参数名|类型|说明|
|-----|----|---|
|name   |string|Meta name   |
|content|string|Meta content|

|参数名|类型|说明|
|-----|----|---|
|metas|object|Object of name content pairs|

### remove

Remove metas.

|参数名|类型|说明|
|-----|----|---|
|name|string array|Meta name|

```javascript
// <meta name="a" content="1"/> <meta name="b" content="2"/> <meta name="c" content="3"/>
meta(); // -> {a: '1', b: '2', c: '3'}
meta('a'); // -> '1'
meta(['a', 'c']); // -> {a: '1', c: '3'}
meta('d', '4');
meta({
    d: '5',
    e: '6',
    f: '7'
});
meta.remove('d');
meta.remove(['e', 'f']);
```