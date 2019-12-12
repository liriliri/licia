test(isAbsoluteUrl)([
    ['http://www.surunzi.com', true],
    ['//www.surunzi.com', false],
    ['surunzi.com', false]
]);
