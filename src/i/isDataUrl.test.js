tests([
    ['http://eustia.liriliri.io', false],
    ['data:,Hello%2C%20World!', true],
    ['data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D', true],
    ['data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E', true]
]);
