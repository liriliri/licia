## isIp

Check if value is an IP address.

<details>
<summary>Type Definition</summary>

```typescript
namespace isIp {
    function v4(str: string): boolean;
    function v6(str: string): boolean;
}
function isIp(str: string): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|str   |String to check               |
|return|True if value is an IP address|

### v4

Check if value is an IPv4 address.

### v6

Check if value is an IPv6 address.

```javascript
isIp('192.168.191.1'); // -> true
isIp('1:2:3:4:5:6:7:8'); // -> true
isIp('test'); // -> false
isIp.v4('192.168.191.1'); // -> true
isIp.v6('1:2:3:4:5:6:7:8'); // -> true
```
