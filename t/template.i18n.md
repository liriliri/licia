## CN

将模板字符串编译成函数用于渲染。

|参数名|类型|说明|
|-----|----|---|
|str|string|模板字符串|
|返回值|function|编译后的模板函数|

```javascript
template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
```