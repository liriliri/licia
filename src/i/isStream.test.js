const stream = require('stream');

it('basic', function() {
    expect(isStream(new stream.Stream())).to.be.true;
    expect(isStream(new stream.Readable())).to.be.true;
    expect(isStream(new stream.Writable())).to.be.true;
    expect(isStream(new stream.Duplex())).to.be.true;
    expect(isStream(new stream.Transform())).to.be.true;
    expect(isStream(new stream.PassThrough())).to.be.true;

    expect(isStream({})).to.be.false;
    expect(isStream(function() {})).to.be.false;
});
