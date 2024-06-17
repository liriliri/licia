const base64 = util.base64;
const strToBytes = util.strToBytes;

it('parse', function() {
    expect(dataUrl.parse('data:,Hello%2C%20World%21')).to.eql({
        data: 'Hello, World!',
        mime: 'text/plain',
        charset: '',
        base64: false
    });
    expect(
        dataUrl.parse(
            'data:text/html;charset=US-ASCII,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E'
        )
    ).to.eql({
        data: '<h1>Hello, World!</h1>',
        mime: 'text/html',
        charset: 'US-ASCII',
        base64: false
    });
    expect(dataUrl.parse('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).to.eql(
        {
            data: 'SGVsbG8sIFdvcmxkIQ==',
            mime: 'text/plain',
            charset: '',
            base64: true
        }
    );
    expect(dataUrl.parse('https://licia.liriliri.io')).to.be.null;
});

it('stringify', function() {
    expect(
        dataUrl.stringify('Hello, World!', '', {
            charset: '',
            base64: false
        })
    ).to.equal('data:,Hello%2C%20World!');
    expect(
        dataUrl.stringify('<h1>Hello, World!</h1>', 'text/html', {
            base64: false,
            charset: 'US-ASCII'
        })
    ).to.equal(
        'data:text/html;charset=US-ASCII,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E'
    );
    expect(
        dataUrl.stringify(
            base64.encode(strToBytes('Hello, World!')),
            'text/plain'
        )
    ).to.equal('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==');
    expect(
        dataUrl.stringify(
            [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33],
            'text/plain',
            {
                base64: false
            }
        )
    ).to.equal('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==');
});
