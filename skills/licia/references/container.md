## container

Get container stats inside container.

<details>
<summary>Type Definition</summary>

```typescript
const container: {
    cpuNum(): number;
    cpuUsage(period?: number): Promise<number>;
    cpuLoad(period?: number): Promise<number>;
    memUsage(): number;
    memLoad(): number;
};
```

</details>

```javascript
container.cpuNum();
```
