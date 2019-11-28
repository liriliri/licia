it('basic', () => {
    // CN
    expect(
        normalizePhone('13512345678', {
            countryCode: 86
        })
    ).to.equal('+8613512345678');
    // USA
    expect(
        normalizePhone('(415) 555-2671', {
            countryCode: 1
        })
    ).to.equal('+14155552671');
    // UK
    expect(
        normalizePhone('020 7183 8750', {
            countryCode: 44,
            trunkPrefix: true
        })
    ).to.equal('+442071838750');
});
