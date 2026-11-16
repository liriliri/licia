## loadImg

Load image with given src.

<details>
<summary>Type Definition</summary>

```typescript
function loadImg(src: string, cb?: types.AnyFn): void;
```

</details>

|Name|Desc           |
|----|---------------|
|src |Image source   |
|cb  |Onload callback|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function(err, img) {
    console.log(img.width, img.height);
});
```
