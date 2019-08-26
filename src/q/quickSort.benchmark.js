const bubbleSort = util.bubbleSort;
const insertionSort = util.insertionSort;
const selectionSort = util.selectionSort;
const mergeSort = util.mergeSort;
const shellSort = util.shellSort;
const random = util.random;

suite
    .add('vanilla', () => randomArr(10000).sort())
    .add('quickSort', () => quickSort(randomArr(10000)))
    .add('shellSort', () => shellSort(randomArr(10000)))
    .add('mergeSort', () => mergeSort(randomArr(10000)))
    .add('bubbleSort', () => bubbleSort(randomArr(10000)))
    .add('insertionSort', () => insertionSort(randomArr(10000)))
    .add('selectionSort', () => selectionSort(randomArr(10000)))
    .run();

function randomArr(len) {
    const arr = new Array(len);

    for (let i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}
