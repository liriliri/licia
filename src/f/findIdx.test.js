const arr = [
    {
        name: 'john',
        age: 24
    },
    {
        name: 'jane',
        age: 23
    }
];

expect(
    findIdx(arr, function(val) {
        return val.age === 23;
    })
).to.equal(1);

expect(
    findIdx(arr, function(val) {
        return val.age === 25;
    })
).to.equal(-1);
