## randomColor

Random color generator.

<details>
<summary>Type Definition</summary>

```typescript
function randomColor(): string;
function randomColor(options: {
    count?: number;
    hue?: number;
    lightness?: number;
    format?: string;
    seed?: number;
}): string | string[];
```

</details>

|Name   |Desc          |
|-------|--------------|
|options|Random options|
|return |Random color  |

Available options:

|Name      |Desc                             |
|----------|---------------------------------|
|count=1   |Color number                     |
|hue       |Hue, number between 0 and 360    |
|lightness |Lightness, number between 0 and 1|
|format=hex|Color format, hex, hsl or rgb    |
|seed      |Random color seed                |

```javascript
randomColor({
    count: 2
}); // -> ['#fed7f4', '#526498']
```
