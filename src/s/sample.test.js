it('basic', function() {
    const arr = [1, 3, 4, 5];
    let result = sample(arr, 2);

    expect(result.length).to.equal(2);
    for (let i = 0; i < result.length; i++) {
        expect(arr.indexOf(result[i])).to.not.equal(-1);
    }

    const obj = { a: 1, b: 2, c: 3 };
    result = sample(obj, 1);
    expect(result.length).to.equal(1);
});
