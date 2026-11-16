## parseHtml

Simple html parser.

<details>
<summary>Type Definition</summary>

```typescript
function parseHtml(
    html: string,
    handlers: {
        start?: (tag: string, attrs: any, unary: boolean) => void;
        end?: (tag: string) => void;
        comment?: (text: string) => void;
        text?: (text: string) => void;
    }
): void;
```

</details>

|Name   |Desc         |
|-------|-------------|
|html   |Html to parse|
|handler|Handlers     |

```javascript
parseHtml('<div>licia</div>', {
    start: (tag, attrs, unary) => {},
    end: tag => {},
    comment: text => {},
    text: text => {}
});
```
