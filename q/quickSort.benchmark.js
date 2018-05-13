var bubbleSort = util.bubbleSort,
    insertionSort = util.insertionSort,
    selectionSort = util.selectionSort,
    mergeSort = util.mergeSort,
    random = util.random;

suite.add('vanilla', function () 
{
    randomArr(10000).sort();
}).add('quickSort', function ()
{
    quickSort(randomArr(10000));
}).add('mergeSort', function () 
{
    mergeSort(randomArr(10000));
}).add('bubbleSort', function ()
{   
    bubbleSort(randomArr(10000));
}).add('insertionSort', function () 
{
    insertionSort(randomArr(10000));
}).add('selectionSort', function () 
{
    selectionSort(randomArr(10000));
}).run();

function randomArr(len) 
{
    var arr = new Array(len);

    for (var i = 0; i < len; i++) arr[i] = random(0, len);

    return arr;
}