## cgroup

Read cgroup metrics inside container.

<details>
<summary>Type Definition</summary>

```typescript
const cgroup: {
    cpu: {
        stat(): {
            usage: number;
        };
        max(): number;
    };
    cpuset: {
        cpus(): {
            effective: number[];
        };
    };
    memory: {
        max(): number;
        current(): number;
    };
    version(): number;
};
```

</details>

```javascript
cgroup.cpu.stat();
```
