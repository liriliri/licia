tests([
    ['c:\\foo\\bar', 'file:///c:/foo/bar'],
    ['/#foo/?bar', 'file:///%23foo/%3Fbar'],
    ['/redhood·su', 'file:///redhood%C2%B7su'],
    ['/🐟', 'file:///%F0%9F%90%9F']
]);
