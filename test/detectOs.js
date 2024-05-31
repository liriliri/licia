it('basic', () => {
    tests([
        [
            'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
            'ios'
        ],
        [
            'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36',
            'android'
        ],
        [
            'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
            'windows'
        ],
        [
            'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0',
            'linux'
        ],
        [
            'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
            'windows phone'
        ],
        [
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
            'os x'
        ],
        ['Nonsense', 'unknown']
    ]);
});

if (util.isNode) {
    const { platform } = process;
    it('node', () => {
        if (platform === 'darwin') {
            expect(detectOs()).to.equal('os x');
        } else if (platform === 'linux') {
            expect(detectOs()).to.equal('linux');
        } else if (platform === 'win32') {
            expect(detectOs()).to.equal('windows');
        } else {
            expect(detectOs()).to.equal('unknown');
        }
    });
}
