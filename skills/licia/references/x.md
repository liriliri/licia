# Licia Reference: x

## xpath

Select elements using xpath or get element xpath, IE is not supported.

<details>
<summary>Type Definition</summary>

```typescript
function xpath(xpath: string): HTMLElement[];
function xpath(node: ChildNode, optimized?: boolean): string;
```

</details>

Select elements using xpath.

|Name  |Desc           |
|------|---------------|
|xpath |Xpath          |
|return|Target elements|

Get element xpath.

|Name     |Desc                                |
|---------|------------------------------------|
|el       |Element                             |
|optimized|Optimize the xpath, default is false|

```javascript
xpath('/html/body'); // -> [body]
xpath(document.body); // -> /html/body
```
