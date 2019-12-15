it('name', function() {
    test([
        ['grid', true],
        ['invalid', false]
    ]);
});

it('value', function() {
    test([
        ['display', 'flex', true],
        ['display', 'invalid', false],
        ['text-decoration-line', 'underline', true],
        ['text-decoration-style', 'underline', false],
        ['opacity', '0.1', true],
        ['opacity', '10px', false]
    ]);
});
