const isSorted = util.isSorted;

function stringify(input, options) {
    return JSON.stringify(sortKeys(input, options));
}

it('basic', () => {
    tests(stringify)([
        [{ b: { d: 2, c: 1 }, a: 0 }, '{"a":0,"b":{"d":2,"c":1}}'],
        [
            { b: { d: 2, c: 1 }, a: 0 },
            { deep: true },
            '{"a":0,"b":{"c":1,"d":2}}'
        ],
        [
            [{ b: { d: 2, c: 1 }, a: 0 }],
            { deep: true },
            '[{"a":0,"b":{"c":1,"d":2}}]'
        ]
    ]);
});

it('circular', () => {
    const obj = { a: 0, b: { c: 1 } };
    obj.b.c = obj;
    const newObj = sortKeys(obj, {
        deep: true
    });
    expect(newObj.b.c).to.equal(newObj);
});

it('comparator', () => {
    const obj = { a: 0, b: 1, c: 2 };
    expect(
        stringify(obj, {
            comparator: (a, b) => -isSorted.defComparator(a, b)
        })
    ).to.equal('{"c":2,"b":1,"a":0}');
});
