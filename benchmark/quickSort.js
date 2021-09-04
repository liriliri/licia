const bubbleSort = util.bubbleSort;
const insertionSort = util.insertionSort;
const selectionSort = util.selectionSort;
const mergeSort = util.mergeSort;
const shellSort = util.shellSort;
const random = util.random;
const heapSort = util.heapSort;

benchmark({
    vanilla() {
        randomArr(10000).sort();
    },
    quickSort() {
        quickSort(randomArr(10000));
    },
    shellSort() {
        shellSort(randomArr(10000));
    },
    mergeSort() {
        mergeSort(randomArr(10000));
    },
    bubbleSort() {
        bubbleSort(randomArr(10000));
    },
    insertionSort() {
        insertionSort(randomArr(10000));
    },
    selectionSort() {
        selectionSort(randomArr(10000));
    },
    heapSort() {
        heapSort(randomArr(10000));
    }
});

function randomArr(len) {
    const arr = new Array(len);

    for (let i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}
