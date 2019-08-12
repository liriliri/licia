/* eslint-disable no-unused-vars */
it('basic', function() {
    expect(fnParams(function(a, b) {})).to.eql(['a', 'b']);
    expect(fnParams(function() {})).to.eql([]);
    expect(fnParams(function(/* comments */ a, b) {})).to.eql(['a', 'b']);
    expect(fnParams('function(a, b) {}')).to.eql(['a', 'b']);
});

it('async', function() {
    expect(fnParams(async function(a, b) {})).to.eql(['a', 'b']);
});

it('arrow function', function() {
    expect(fnParams((a, b) => {})).to.eql(['a', 'b']);
    expect(fnParams(() => {})).to.eql([]);
    expect(fnParams(a => {})).to.eql(['a']);
});
