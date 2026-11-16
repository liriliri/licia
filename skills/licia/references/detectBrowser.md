## detectBrowser

Detect browser info using ua.

<details>
<summary>Type Definition</summary>

```typescript
function detectBrowser(
    ua?: string
): {
    name: string;
    version: number;
};
```

</details>

|Name                  |Desc                              |
|----------------------|----------------------------------|
|ua=navigator.userAgent|Browser userAgent                 |
|return                |Object containing name and version|

Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)

```javascript
const browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9) {
    // Do something about old IE...
}
```
