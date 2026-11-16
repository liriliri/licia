## isMobile

Check whether client is using a mobile browser using ua.

<details>
<summary>Type Definition</summary>

```typescript
function isMobile(ua?: string): boolean;
```

</details>

|Name                  |Desc                                 |
|----------------------|-------------------------------------|
|ua=navigator.userAgent|User agent                           |
|return                |True if ua belongs to mobile browsers|

```javascript
isMobile(navigator.userAgent);
```
