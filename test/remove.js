const arr = [1, 2, 3, 4, 5];
const evens = remove(arr, function(val) {
    return val % 2 === 0;
});
expect(arr).to.eql([1, 3, 5]);
expect(evens).to.eql([2, 4]);

const people = [
    {
        name: 'john',
        age: 24
    },
    {
        name: 'jane',
        age: 23
    },
    {
        name: 'kitty',
        age: 24
    }
];

const jane = remove(people, item => item.name === 'jane');
expect(people).to.eql([
    {
        name: 'john',
        age: 24
    },
    {
        name: 'kitty',
        age: 24
    }
]);
expect(jane).to.eql([{ name: 'jane', age: 23 }]);
