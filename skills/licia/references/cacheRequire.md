## cacheRequire

Cache everything in module require to speed up app load.

<details>
<summary>Type Definition</summary>

```typescript
function cacheRequire(options?: {
    dir?: string;
    requirePath?: boolean;
    code?: boolean;
    compileCache?: boolean;
}): void;
```

</details>

|Name   |Desc         |
|-------|-------------|
|options|Cache options|

Available options:

|Name             |Desc                                 |
|-----------------|-------------------------------------|
|dir              |Cache dir                            |
|requirePath=true |Whether require path should be cached|
|code=false       |Whether js code should be cached     |
|compileCache=true|Whether compile cache should be used |

```javascript
cacheRequire({
    dir: 'path/to/cache/dir'
});
```
