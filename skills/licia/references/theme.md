## theme

Theme helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace theme {
    interface ITheme extends Emitter {
        get(): string;
    }
}
const theme: theme.ITheme;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current theme(light or dark).

```javascript
theme.on('change', function(theme) {
    console.log(theme); // -> 'dark'
});
theme.get(); // -> 'light'
```
