/* JavaScript Benchmark.
 */

_('Class defaults Promise perfNow delay average reduce each map table toStr');

exports = Class(
    {
        initialize: function Benchmark(fn, options = {}) {
            defaults(options, defOpts);
            this._fn = fn;
            this._isRunning = false;
            this._options = options;
        },
        reset() {
            this._timeStamp = perfNow();
            this._sample = [];
        },
        run() {
            if (this._isRunning) {
                return this._pendingPromise;
            }
            this.reset();
            this._isRunning = true;

            const options = this._options;

            const pendingPromise = new Promise((resolve, reject) => {
                const runSample = (initCount = 1) => {
                    delay(() => {
                        this._runSample(initCount)
                            .then(({ period, count }) => {
                                const sample = this._sample;
                                sample.push(period);
                                if (
                                    perfNow() - this._timeStamp <
                                        options.maxTime ||
                                    sample.length < options.minSamples
                                ) {
                                    runSample(count);
                                } else {
                                    resolve(this._calcResult());
                                }
                            })
                            .catch(err => {
                                reject(err);
                            });
                    }, options.delay);
                };

                runSample();
            });

            function complete() {
                this._isRunning = false;
                delete this._pendingPromise;
            }
            pendingPromise.then(complete).catch(complete);
            this._pendingPromise = pendingPromise;

            return pendingPromise;
        },
        _calcResult() {
            const sample = this._sample;
            const result = {
                sample,
                toString() {
                    const { hz, rme, name } = this;
                    const size = this.sample.length;
                    return `${name} x ${formatNumber(
                        hz.toFixed(hz < 100 ? 2 : 0)
                    )} ops/sec \xb1${rme.toFixed(2)}% (${size} run${
                        size === 1 ? '' : 's'
                    } sampled)`;
                }
            };
            const size = sample.length;

            result.name = this._options.name || this._fn.name || 'anonymous';
            result.mean = average.apply(null, sample);
            function varOf(sum, x) {
                return sum + Math.pow(x - result.mean, 2);
            }
            result.variance = reduce(sample, varOf, 0) / (size - 1) || 0;
            result.deviation = Math.sqrt(result.variance);
            result.sem = result.deviation / Math.sqrt(size);
            const critical =
                tTable[Math.round(size - 1) || 1] || tTable.infinity;
            result.moe = result.sem * critical;
            result.rme = (result.moe / result.mean) * 100 || 0;
            result.hz = 1000 / result.mean;

            return result;
        },
        _runSample(count) {
            const options = this._options;
            const { minTime } = options;

            return new Promise((resolve, reject) => {
                const runCycle = count => {
                    delay(() => {
                        let elapsed = 0;
                        try {
                            elapsed = this._runCycle(count);
                        } catch (e) {
                            return reject(e);
                        }
                        const period = elapsed / count;
                        if (elapsed < minTime) {
                            count += Math.ceil((minTime - elapsed) / period);
                            runCycle(count);
                        } else {
                            resolve({
                                count,
                                period
                            });
                        }
                    }, options.delay);
                };
                runCycle(count);
            });
        },
        _runCycle(count) {
            const fn = this._fn;
            const now = perfNow();
            while (count--) {
                fn();
            }
            return perfNow() - now;
        }
    },
    {
        all(benches, options) {
            const promises = [];

            each(benches, bench => {
                if (!(bench instanceof exports)) {
                    bench = new exports(bench, options);
                }
                promises.push(bench.run());
            });

            return Promise.all(promises).then(results => {
                results.toString = function() {
                    const data = map(
                        results,
                        ({ name, sample, hz, rme }, idx) => {
                            const columns = [];
                            const size = sample.length;
                            columns.push(
                                toStr(idx + 1),
                                name || 'anonymous',
                                formatNumber(hz.toFixed(hz < 100 ? 2 : 0)),
                                `\xb1${rme.toFixed(2)}%`,
                                `${size} run${size === 1 ? '' : 's'}`
                            );
                            return columns;
                        }
                    );
                    data.unshift([
                        'index',
                        'name',
                        'ops/sec',
                        'rme',
                        'sampled'
                    ]);
                    return table(data);
                };
                return results;
            });
        }
    }
);

const defOpts = {
    minTime: 50,
    maxTime: 5000,
    minSamples: 5,
    delay: 5,
    name: ''
};

const tTable = {
    '1': 12.706,
    '2': 4.303,
    '3': 3.182,
    '4': 2.776,
    '5': 2.571,
    '6': 2.447,
    '7': 2.365,
    '8': 2.306,
    '9': 2.262,
    '10': 2.228,
    '11': 2.201,
    '12': 2.179,
    '13': 2.16,
    '14': 2.145,
    '15': 2.131,
    '16': 2.12,
    '17': 2.11,
    '18': 2.101,
    '19': 2.093,
    '20': 2.086,
    '21': 2.08,
    '22': 2.074,
    '23': 2.069,
    '24': 2.064,
    '25': 2.06,
    '26': 2.056,
    '27': 2.052,
    '28': 2.048,
    '29': 2.045,
    '30': 2.042,
    infinity: 1.96
};

function formatNumber(number) {
    number = String(number).split('.');
    return (
        number[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') +
        (number[1] ? '.' + number[1] : '')
    );
}
