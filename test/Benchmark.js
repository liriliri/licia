it('basic', function(done) {
    const benchmark = new Benchmark(
        function test() {
            !!'Hello World!'.match(/o/);
        },
        {
            maxTime: 1500
        }
    );
    benchmark.run().then(result => {
        expect(result.name).to.equal('test');
        expect(String(result)).to.have.string('test');
        done();
    });
});

it('all', function(done) {
    Benchmark.all(
        [
            function regExp() {
                /o/.test('Hello World!');
            },
            function indexOf() {
                'Hello World!'.indexOf('o') > -1;
            },
            function match() {
                !!'Hello World!'.match(/o/);
            }
        ],
        {
            maxTime: 1500
        }
    ).then(results => {
        expect(results.length).to.equal(3);
        expect(String(results)).to.have.string('regExp');
        done();
    });
});

it('error', function(done) {
    const benchmark = new Benchmark(function() {
        const obj = {};
        obj.test();
    });
    benchmark.run();
    benchmark.run().catch(err => {
        expect(err).to.be.an('error');
        done();
    });
});
