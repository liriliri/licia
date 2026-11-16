## rmdir

Recursively remove directories.

<details>
<summary>Type Definition</summary>

```typescript
function rmdir(dir: string, cb?: types.AnyFn): void;
```

</details>

|Name|Desc               |
|----|-------------------|
|dir |Directory to remove|
|cb  |Callback           |

```javascript
rmdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
```
