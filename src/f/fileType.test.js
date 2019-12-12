const each = util.each;
const convertBin = util.convertBin;

// https://github.com/mathiasbynens/small
const tests = [
    [
        'jpg',
        '/9j/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/yQALCAABAAEBAREA/8wABgAQEAX/2gAIAQEAAD8A0s8g/9k='
    ],
    [
        'png',
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQAB'
    ],
    ['gif', 'R0lGODlhAQABAAAAADs='],
    ['webp', 'UklGRhIAAABXRUJQVlA4TAYAAAAvQWxvAGs='],
    ['bmp', 'Qk0eAAAAAAAAABoAAAAMAAAAAQABAAEAGAAAAP8A'],
    ['gz', 'H4sIAK6G4VsCAwMAAAAAAAAAAAA='],
    ['zip', 'UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA=='],
    [
        'rar',
        'UmFyIRoHAM+QcwAADQAAAAAAAAA/HnQAgCEAAAAAAAAAAAAAAAAAAAdjZk0PMwEAIAAAAG4='
    ],
    [
        'pdf',
        'JVBERi0xLgoxIDAgb2JqPDwvUGFnZXMgMiAwIFI+PmVuZG9iagoyIDAgb2JqPDwvS2lkc1szIDAgUl0vQ291bnQgMT4+ZW5kb2JqCjMgMCBvYmo8PC9QYXJlbnQgMiAwIFI+PmVuZG9iagp0cmFpbGVyIDw8L1Jvb3QgMSAwIFI+Pg=='
    ],
    [
        'exe',
        'TVoAAAEAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AUzNIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='
    ]
];

each(tests, test => {
    const result = fileType(convertBin(test[1], 'Uint8Array'));
    expect(result.ext).to.equal(test[0]);
});
