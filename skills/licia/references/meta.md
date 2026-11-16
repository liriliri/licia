## meta

Document meta manipulation, turn name and content into key value pairs.

<details>
<summary>Type Definition</summary>

```typescript
namespace meta {
    function remove(nameList: string | string[]): void;
}
function meta(): {};
function meta(key: string): string;
function meta(keys: string[]): {};
function meta(key, value): void;
function meta(pairs: {}): void;
```

</details>

Get meta content with given name. If name is omitted, all pairs will be return.

|Name  |Desc        |
|------|------------|
|name  |Meta name   |
|return|Meta content|

Set meta content.

|Name   |Desc        |
|-------|------------|
|name   |Meta name   |
|content|Meta content|

|Name |Desc                        |
|-----|----------------------------|
|metas|Object of name content pairs|

### remove

Remove metas.

|Name|Desc     |
|----|---------|
|name|Meta name|

```javascript
// <meta name="a" content="1"/> <meta name="b" content="2"/> <meta name="c" content="3"/>
meta(); // -> {a: '1', b: '2', c: '3'}
meta('a'); // -> '1'
meta(['a', 'c']); // -> {a: '1', c: '3'}
meta('d', '4');
meta({
    d: '5',
    e: '6',
    f: '7'
});
meta.remove('d');
meta.remove(['e', 'f']);
```
