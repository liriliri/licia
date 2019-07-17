it('basic', () => {
    expect(stripIndent`
        Test string\n
            * item one
            * item two
    `).to.equal('Test string\n\n    * item one\n    * item two');
    expect(stripIndent`
        Test string
            * ${'item one'}
            * ${'item two'}
    `).to.equal('Test string\n    * item one\n    * item two');
    expect(
        stripIndent(`
        Test string
            * item one
            * item two
    `)
    ).to.equal('Test string\n    * item one\n    * item two');
});

it('backticks', () => {
    expect(stripIndent`\``).to.equal('`');
});

it('newline', () => {
    expect(stripIndent`test \n test`).to.equal('test \ntest');
    expect(stripIndent('test \n test')).to.equal('test \ntest');
});
