## Url

Simple url manipulator.

<details>
<summary>Type Definition</summary>

```typescript
namespace Url {
    interface IUrl {
        protocol: string;
        auth: string;
        hostname: string;
        hash: string;
        query: any;
        port: string;
        pathname: string;
        slashes: boolean;
    }
}
class Url {
    protocol: string;
    auth: string;
    hostname: string;
    hash: string;
    query: any;
    port: string;
    pathname: string;
    slashes: boolean;
    constructor(url?: string);
    setQuery(name: string, val: string | number): Url;
    setQuery(query: types.PlainObj<string | number>): Url;
    rmQuery(name: string | string[]): Url;
    toString(): string;
    static parse(url: string): Url.IUrl;
    static stringify(object: Url.IUrl): string;
}
```

</details>

### constructor

|Name        |Desc      |
|------------|----------|
|url=location|Url string|

### setQuery

Set query value.

|Name  |Desc       |
|------|-----------|
|name  |Query name |
|val   |Query value|
|return|this       |

|Name  |Desc        |
|------|------------|
|query |query object|
|return|this        |

### rmQuery

Remove query value.

|Name  |Desc      |
|------|----------|
|name  |Query name|
|return|this      |

### parse

[static] Parse url into an object.

|Name  |Desc      |
|------|----------|
|url   |Url string|
|return|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Desc      |
|------|----------|
|url   |Url object|
|return|Url string|

An url object contains the following properties:

|Name    |Desc                                                                                  |
|--------|--------------------------------------------------------------------------------------|
|protocol|The protocol scheme of the URL (e.g. http:)                                           |
|slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
|auth    |Authentication information portion (e.g. username:password)                           |
|hostname|Host name without port number                                                         |
|port    |Optional port number                                                                  |
|pathname|URL path                                                                              |
|query   |Parsed object containing query string                                                 |
|hash    |The "fragment" portion of the URL including the pound-sign (#)                        |

```javascript
const url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
url.toString(); // -> 'http://example.com:8080/?foo=bar'
```
