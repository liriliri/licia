## CN

Compile JavaScript template into function that can be evaluated for rendering.

|参数名|类型|说明|
|-----|----|---|
|str   |string  |Template string           |
|返回值|function|Compiled template function|

```javascript
template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
```