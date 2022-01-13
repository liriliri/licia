const toNum = util.toNum;

it('basic', function() {
    let sum = function(a, b) {
        if (a > 100) {
            throw Error('a is bigger than 100');
        }
        return a + b;
    };
    expect(sum(2, 5)).to.equal(7);
    expect(sum('2', '5')).to.equal('25');
    expect(() => sum(105)).to.throw();
    let totalSum = 0;
    /* eslint-disable no-func-assign */
    sum = hookFn(sum, {
        before(a, b) {
            return [toNum(a), toNum(b)];
        },
        after(result) {
            totalSum += result;
            return totalSum;
        },
        error() {
            return totalSum;
        }
    });
    expect(sum('2', '5')).to.equal(7);
    expect(sum(2, 5)).to.equal(14);
    expect(() => {
        expect(sum(105)).to.equal(14);
    }).to.not.throw();
});
