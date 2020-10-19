// https://github.com/mathiasbynens/small
tests(function(input) {
    return fileType(util.convertBin(input, 'Uint8Array')).ext;
})([
    [
        '/9j/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/yQALCAABAAEBAREA/8wABgAQEAX/2gAIAQEAAD8A0s8g/9k=',
        'jpg'
    ],
    [
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQAB',
        'png'
    ],
    ['R0lGODlhAQABAAAAADs=', 'gif'],
    ['UklGRhIAAABXRUJQVlA4TAYAAAAvQWxvAGs=', 'webp'],
    ['Qk0eAAAAAAAAABoAAAAMAAAAAQABAAEAGAAAAP8A', 'bmp'],
    ['H4sIAK6G4VsCAwMAAAAAAAAAAAA=', 'gz'],
    ['UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==', 'zip'],
    [
        'UmFyIRoHAM+QcwAADQAAAAAAAAA/HnQAgCEAAAAAAAAAAAAAAAAAAAdjZk0PMwEAIAAAAG4=',
        'rar'
    ],
    [
        'JVBERi0xLgoxIDAgb2JqPDwvUGFnZXMgMiAwIFI+PmVuZG9iagoyIDAgb2JqPDwvS2lkc1szIDAgUl0vQ291bnQgMT4+ZW5kb2JqCjMgMCBvYmo8PC9QYXJlbnQgMiAwIFI+PmVuZG9iagp0cmFpbGVyIDw8L1Jvb3QgMSAwIFI+Pg==',
        'pdf'
    ],
    [
        'TVoAAAEAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AUzNIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
        'exe'
    ]
]);
