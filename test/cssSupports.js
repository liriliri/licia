it('name', function() {
    tests([
        ['grid', true],
        ['invalid', false]
    ]);
});

it('value', function() {
    tests([
        ['display', 'flex', true],
        ['display', 'invalid', false],
        ['text-decoration-line', 'underline', true],
        ['text-decoration-style', 'underline', false],
        ['opacity', '0.1', true],
        ['opacity', '10px', false]
    ]);
});
