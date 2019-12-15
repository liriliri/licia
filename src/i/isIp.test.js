test([
    ['192.168.191.1', true],
    ['1:2:3:4:5:6:7:8', true],
    ['test', false],
    ['192.168.191.1.1', false],
    ['0.0.0.0', true],
    ['127.0.0.1', true],
    ['300.0.0.1', false]
]);

test(isIp.v4)([
    ['192.168.191.1', true],
    ['test', false]
]);
test(isIp.v6)([
    ['1:2:3:4:5:6:7:8', true],
    ['test', false]
]);
