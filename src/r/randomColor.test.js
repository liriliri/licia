expect(randomColor()).to.be.a('string');
expect(
    randomColor({
        count: 2
    }).length
).to.equal(2);
expect(randomColor({ seed: 500 })).to.equal(randomColor({ seed: 500 }));
