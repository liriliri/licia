var each = util.each;

it('basic', function () 
{
    test([
        ['Nonsense', 'unknown', -1]
    ]);
});

it('ie', function () 
{
    test([
        ['Mozilla/5.0 (Windows; U; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)', 'ie', 6],
        ['Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)', 'ie', 7],
        ['Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)', 'ie', 8],
        ['Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))', 'ie', 9],
        ['Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)', 'ie', 10],
        ['Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko', 'ie', 11]
    ]);
});

it('chrome', function () 
{
    test([
        ['Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', 'chrome', 41],
        ['Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', 'chrome', 56]
    ]);
});

it('edge', function () 
{
    test([
        ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246', 'edge', 12],
        ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393', 'edge', 14]
    ]);
});

it('firefox', function () 
{
    test([
        ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0', 'firefox', 33],
        ['Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0', 'firefox', 50]
    ]);
});

it('opera', function () 
{
    test([
        ['Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52', 'opera', 11],
        ['Opera/9.80 (X11; Linux i686; U; it) Presto/2.5.24 Version/10.54', 'opera', 10],
        ['Opera/9.70 (Linux i686 ; U; zh-cn) Presto/2.2.0', 'opera', 9]
    ]);
});

it('safari', function () 
{
    test([
        ['Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+', 'safari', 5],
        ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A', 'safari', 7]
    ]);
});

it('ios', function () 
{
    test([
        ['Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'ios', 9]
    ]);
});

it('android', function () 
{
    test([
        ['Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36', 'android', 6]
    ]);
});

function test(expects) 
{
    each(expects, function (val) 
    {
        var result = detectBrowser(val[0]);

        expect(result).to.eql({
            name: val[1],
            version: val[2]
        });
    });
}