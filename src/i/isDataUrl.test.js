expect(isDataUrl('http://eustia.liriliri.io')).to.be.false;
expect(isDataUrl('data:,Hello%2C%20World!')).to.be.true;
expect(isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).to.be.true;
expect(isDataUrl('data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E')).to.be
    .true;
