## getUrlParam

Get url param.

<details>
<summary>Type Definition</summary>

```typescript
function getUrlParam(
    name: string,
    url?: string
): string | undefined;
```

</details>

|Name        |Desc            |
|------------|----------------|
|name        |Param name      |
|url=location|Url to get param|
|return      |Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```
