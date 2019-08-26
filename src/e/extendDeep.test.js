it('basic', function() {
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
