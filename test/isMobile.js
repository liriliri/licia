const chrome =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36';
const edge =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240';
const firefox =
    'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0';
const safari =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/601.6.17 (KHTML, like Gecko) Version/9.1.1 Safari/601.6.17';
const ios =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G34 Safari/601.1';
const android =
    'Mozilla/5.0 (Linux; U; Android 5.0.2; zh-cn; Redmi Note 2 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.85 Mobile Safari/537.36 XiaoMi/MiuiBrowser/8.0.11';

it('default', function() {
    expect(isMobile()).to.be.a('boolean');
});

it('chrome', function() {
    expect(isMobile(chrome)).to.be.false;
});

it('edge', function() {
    expect(isMobile(edge)).to.be.false;
});

it('firefox', function() {
    expect(isMobile(firefox)).to.be.false;
});

it('safari', function() {
    expect(isMobile(safari)).to.be.false;
});

it('ios', function() {
    expect(isMobile(ios)).to.be.true;
});

it('android', function() {
    expect(isMobile(android)).to.be.true;
});
