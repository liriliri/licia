it('basic', function() {
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
        find(arr, function(val) {
            return val.age === 23;
        })
    ).to.eql({
        name: 'jane',
        age: 23
    });

    expect(
        find(arr, function(val) {
            return val.age === 25;
        })
    ).to.be.undefined;
});

it('object', function() {
    const obj = {
        jane: {
            height: 158,
            age: 23
        },
        john: {
            height: 173,
            age: 24
        }
    };

    expect(
        find(obj, function(val) {
            return val.age === 23;
        })
    ).to.eql({
        height: 158,
        age: 23
    });
});
