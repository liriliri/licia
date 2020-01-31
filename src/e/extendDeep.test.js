it('basic', () => {
    const obj = {
        name: 'RedHood',
        family: {
            mother: 'Jane',
            father: 'Jack'
        }
    };

    extendDeep(obj, {
        family: {
            brother: 'Bruce'
        }
    });

    expect(obj).to.eql({
        name: 'RedHood',
        family: {
            mother: 'Jane',
            father: 'Jack',
            brother: 'Bruce'
        }
    });
});

it('prototype pollution', () => {
    const a = {};
    extendDeep({}, { __proto__: { oops: 'It works!' } });
    expect(a.oops).to.not.equal('It works!');
});
