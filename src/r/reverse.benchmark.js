const random = util.random;

suite
    .add('vanilla', () =>
        randomArr(10000)
            .slice()
            .reverse()
    )
    .add('reverse', () => reverse(randomArr(10000)))
    .run();

function randomArr(len) {
    const arr = new Array(len);

    for (let i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}
