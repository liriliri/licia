## ajax

Perform an asynchronous HTTP request.

<details>
<summary>Type Definition</summary>

```typescript
namespace ajax {
    function get(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function get(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
}
function ajax(options: {
    type?: string;
    url: string;
    data?: string | {};
    dataType?: string;
    contentType?: string;
    success?: types.AnyFn;
    error?: types.AnyFn;
    complete?: types.AnyFn;
    timeout?: number;
}): XMLHttpRequest;
```

</details>

|Name   |Desc        |
|-------|------------|
|options|Ajax options|

Available options:

|Name                                         |Desc                       |
|---------------------------------------------|---------------------------|
|type=get                                     |Request type               |
|url                                          |Request url                |
|data                                         |Request data               |
|dataType=json                                |Response type(json, xml)   |
|contentType=application/x-www-form-urlencoded|Request header Content-Type|
|success                                      |Success callback           |
|error                                        |Error callback             |
|complete                                     |Callback after request     |
|timeout                                      |Request timeout            |

### get

Shortcut for type = GET;

### post

Shortcut for type = POST;

|Name    |Desc            |
|--------|----------------|
|url     |Request url     |
|data    |Request data    |
|success |Success callback|
|dataType|Response type   |

```javascript
ajax({
    url: 'http://example.com',
    data: { test: 'true' },
    error() {},
    success(data) {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function(data) {
    // ...
});
```
