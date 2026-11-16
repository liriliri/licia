## isHidden

Check if element is hidden.

<details>
<summary>Type Definition</summary>

```typescript
function isHidden(
    el: Element,
    options?: {
        display?: boolean;
        visibility?: boolean;
        opacity?: boolean;
        size?: boolean;
        viewport?: boolean;
        overflow?: boolean;
    }
): boolean;
```

</details>

|Name   |Desc                     |
|-------|-------------------------|
|el     |Target element           |
|options|Check options            |
|return |True if element is hidden|

Available options:

|Name            |Desc                         |
|----------------|-----------------------------|
|display=true    |Check if it is displayed     |
|visibility=false|Check visibility css property|
|opacity=false   |Check opacity css property   |
|size=false      |Check width and height       |
|viewport=false  |Check if it is in viewport   |
|overflow=false  |Check if hidden in overflow  |

```javascript
isHidden(document.createElement('div')); // -> true
```
