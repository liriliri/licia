## cookie

Simple api for handling browser cookies.

<details>
<summary>Type Definition</summary>

```typescript
namespace cookie {
    interface IOptions {
        path?: string;
        expires?: number;
        domain?: string;
        secure?: boolean;
    }
    interface ICookie {
        get(key: string, options?: cookie.IOptions): string;
        set(key: string, val: string, options?: cookie.IOptions): ICookie;
        remove(key: string, options?: cookie.IOptions): ICookie;
    }
}
const cookie: cookie.ICookie;
```

</details>

### get

Get cookie value.

|Name  |Desc                      |
|------|--------------------------|
|key   |Cookie key                |
|return|Corresponding cookie value|

### set

Set cookie value.

|Name   |Desc          |
|-------|--------------|
|key    |Cookie key    |
|val    |Cookie value  |
|options|Cookie options|
|return |Module cookie |

### remove

Remove cookie value.

|Name   |Desc          |
|-------|--------------|
|key    |Cookie key    |
|options|Cookie options|
|return |Module cookie |

```javascript
cookie.set('a', '1', { path: '/' });
cookie.get('a'); // -> '1'
cookie.remove('a');
```
