it('basic', function() {
    expect(stringify({ a: 1, b: null, c: '' })).to.equal(
        '{"a":1,"b":null,"c":""}'
    );
    expect(stringify({ a: 1 }, 2)).to.equal('{\n  "a": 1\n}');
});

it('circular', function() {
    let obj = { a: 1 };
    obj.b = obj;
    expect(stringify(obj)).to.equal('{"a":1,"b":"[Circular ~]"}');

    obj = { a: 1, b: {} };
    obj.b.self = obj.b;
    expect(stringify(obj)).to.equal('{"a":1,"b":{"self":"[Circular ~.b]"}}');
});

it('special value', function() {
    // prettier-ignore
    expect(stringify({ a: function () {} })).to.equal(
        '{"a":"[Function function () {}]"}'
    );
    expect(stringify({ a: /reg/g })).to.equal('{"a":"[Regexp /reg/g]"}');
    expect(stringify({ a: undefined })).to.equal('{"a":null}');
});
