## Benchmark

JavaScript Benchmark.

<details>
<summary>Type Definition</summary>

```typescript
namespace Benchmark {
    interface IOptions {
        minTime?: number;
        maxTime?: number;
        minSamples?: number;
        delay?: number;
        name?: string;
    }
    interface IResult {
        name: string;
        mean: number;
        variance: number;
        deviation: number;
        sem: number;
        moe: number;
        rme: number;
        hz: number;
        sample: number[];
    }
}
class Benchmark {
    constructor(fn: types.AnyFn, options?: Benchmark.IOptions);
    run(): Promise<Benchmark.IResult>;
    static all(
        benches: Array<types.AnyFn | Benchmark>,
        options?: Benchmark.IOptions
    ): Promise<Benchmark.IResult[]>;
}
```

</details>

### constructor

|Name   |Desc                  |
|-------|----------------------|
|fn     |Code for speed testing|
|options|Benchmark options     |

Available options:

|Name        |Desc                              |
|------------|----------------------------------|
|minTime=50  |Time needed to reduce uncertainty |
|maxTime=5000|Maximum time for running benchmark|
|minSamples=5|Minimum sample size               |
|delay=5     |Delay between test cycles         |
|name        |Benchmark name                    |

### run

Run benchmark, returns a promise.

### all

[static] Run some benchmarks.

```javascript
const benchmark = new Benchmark(
    function test() {
        !!'Hello World!'.match(/o/);
    },
    {
        maxTime: 1500
    }
);
benchmark.run().then(result => {
    console.log(String(result));
});
Benchmark.all([
    function regExp() {
        /o/.test('Hello World!');
    },
    function indexOf() {
        'Hello World!'.indexOf('o') > -1;
    },
    function match() {
        !!'Hello World!'.match(/o/);
    }
]).then(results => {
    console.log(String(results));
});
```
