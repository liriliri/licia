it('basic', function() {
    const a = { b: 1 };
    a.b = 2;
    expect(a).to.eql({ b: 2 });
    freeze(a);
    a.b = 1;
    expect(a).to.eql({ b: 2 });
});

it('shallow', function() {
    const a = {
        b: { c: 1 }
    };

    freeze(a);
    a.b.c = 2;
    expect(a).to.eql({
        b: { c: 2 }
    });
});

it('fallback', function() {
    const objFreeze = Object.freeze;
    Object.freeze = null;

    const a = { b: 1 };
    a.b = 2;
    expect(a).to.eql({ b: 2 });
    freeze(a);
    a.b = 1;
    expect(a).to.eql({ b: 2 });
    freeze(a);

    Object.freeze = objFreeze;
});
