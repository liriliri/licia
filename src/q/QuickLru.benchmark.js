const random = util.random;
const Lru = util.Lru;

const max = 2e5;
const max2 = max * 2;
const data1 = new Array(max2);
const data2 = new Array(max2);

for (let i = 0; i < max2; i++) {
    data1[i] = [i, random(0, max2)];
    data2[i] = [i, random(0, max2)];
}

const lru = new Lru(max);
const quickLru = new QuickLru(max);

suite
    .add('Lru', () => {
        test(lru);
    })
    .add('QuickLru', () => {
        test(quickLru);
    })
    .run();

function test(lru) {
    for (let i = 0; i < max; i++) {
        lru.set(data1[i][0], data1[i][1]);
    }
    for (let i = 0; i < max; i++) {
        lru.get(data1[i][0]);
    }
    for (let i = 0; i < max; i++) {
        lru.set(data1[i][0], data2[i][1]);
    }
    for (let i = max; i < max2; i++) {
        lru.set(data1[i][0], data1[i][1]);
    }
}
