let bubbleSort = util.bubbleSort;
let insertionSort = util.insertionSort;
let selectionSort = util.selectionSort;
let mergeSort = util.mergeSort;
let shellSort = util.shellSort;
let random = util.random;

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
    var arr = new Array(len);

    for (var i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}
