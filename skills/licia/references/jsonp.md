## jsonp

A simple jsonp implementation.

<details>
<summary>Type Definition</summary>

```typescript
function jsonp(options: {
    url: string;
    data?: any;
    success?: types.AnyFn;
    param?: string;
    name?: string;
    error?: types.AnyFn;
    complete?: types.AnyFn;
    timeout?: number;
}): void;
```

</details>

|Name   |Desc         |
|-------|-------------|
|options|Jsonp Options|

Available options:

|Name          |Desc                  |
|--------------|----------------------|
|url           |Request url           |
|data          |Request data          |
|success       |Success callback      |
|param=callback|Callback param        |
|name          |Callback name         |
|error         |Error callback        |
|complete      |Callback after request|
|timeout       |Request timeout       |

```javascript
jsonp({
    url: 'http://example.com',
    data: { test: 'true' },
    success: function(data) {
        // ...
    }
});
```
