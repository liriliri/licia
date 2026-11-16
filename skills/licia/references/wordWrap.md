## wordWrap

Wrap a string to a given length.

<details>
<summary>Type Definition</summary>

```typescript
function wordWrap(txt: string, width: number): string;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|txt   |Text to wrap                  |
|width |Text width                    |
|return|String wrapped at given length|

```javascript
wordWrap('Licia is a utility library.', 10);
// -> 'Licia is \na utility \nlibrary.'
```
