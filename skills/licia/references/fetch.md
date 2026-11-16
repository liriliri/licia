## fetch

Turn XMLHttpRequest into promise like.

<details>
<summary>Type Definition</summary>

```typescript
namespace fetch {
    interface IResult {
        ok: boolean;
        status: number;
        statusText: string;
        url: string;
        clone(): IResult;
        text(): Promise<string>;
        json(): Promise<any>;
        xml(): Promise<Document | null>;
        blob(): Promise<Blob>;
        headers: {
            keys(): string[];
            entries(): Array<string[]>;
            get(name: string): string;
            has(name: string): boolean;
        };
    }
}
function fetch(
    url: string,
    options?: {
        method?: string;
        timeout?: number;
        headers?: types.PlainObj<string>;
        body?: any;
    }
): Promise<fetch.IResult>;
```

</details>

Note: This is not a complete fetch pollyfill.

|Name   |Desc           |
|-------|---------------|
|url    |Request url    |
|options|Request options|
|return |Request promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
})
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });
```
