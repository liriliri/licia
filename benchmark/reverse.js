const random = util.random;

benchmark({
    vanilla() {
        randomArr(10000)
            .slice()
            .reverse();
    },
    reverse() {
        reverse(randomArr(10000));
    }
});

function randomArr(len) {
    const arr = new Array(len);

    for (let i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}
