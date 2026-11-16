## mkdir

Recursively create directories.

<details>
<summary>Type Definition</summary>

```typescript
namespace mkdir {
    function sync(dir: string, mode?: number): void;
}
function mkdir(
    dir: string,
    mode?: number,
    cb?: types.AnyFn
): void;
function mkdir(dir: string, cb?: types.AnyFn): void;
```

</details>

|Name     |Desc               |
|---------|-------------------|
|dir      |Directory to create|
|mode=0777|Directory mode     |
|cb       |Callback           |

### sync

Synchronous version.

```javascript
mkdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
mkdir.sync('/tmp/foo2/bar/baz');
```
