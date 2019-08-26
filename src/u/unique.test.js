it('basic', function() {
    expect(unique([1, 2, 3, 1]).length).to.equal(3);

    const arr = [{ a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }];

    expect(
        unique(arr, function(a, b) {
            return a.a === b.a;
        }).length
    ).equal(2);
});
