## detectOs

Detect operating system using ua.

<details>
<summary>Type Definition</summary>

```typescript
function detectOs(ua?: string): string;
```

</details>

|Name                  |Desc                 |
|----------------------|---------------------|
|ua=navigator.userAgent|Browser userAgent    |
|return                |Operating system name|

Supported os: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios') {
    // Do something about ios...
}
```
