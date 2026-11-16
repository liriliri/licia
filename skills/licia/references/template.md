## template

Compile JavaScript template into function that can be evaluated for rendering.

<details>
<summary>Type Definition</summary>

```typescript
function template(str: string, util?: any): types.AnyFn;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|str   |Template string           |
|util  |Utility functions         |
|return|Compiled template function|

```javascript
template('Hello <%= name %>!')({ name: 'licia' }); // -> 'Hello licia!'
template('<p><%- name %></p>')({ name: '<licia>' }); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({ echo: true }); // -> 'Hello licia!'
template('<p><%= util["upperCase"](name) %></p>', {
    upperCase: function(str) {
        return str.toLocaleUpperCase();
    }
})({ name: 'licia' }); // -> '<p>LICIA</p>'
```
