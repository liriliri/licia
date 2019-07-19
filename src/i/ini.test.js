const stripIndent = util.stripIndent;

const iniStr = stripIndent`
    ; This is a comment
    library = licia

    [user.info]
    name = surunzi
    alias[] = redhoodsu
    alias[] = red
`;

const obj = {
    library: 'licia',
    user: { info: { name: 'surunzi', alias: ['redhoodsu', 'red'] } }
};

it('basic', () => {
    expect(ini.parse(iniStr)).to.eql(obj);
    expect(ini.stringify(obj, { whitespace: true })).to.equal(
        stripIndent`
        library = licia

        [user.info]
        name = surunzi
        alias[] = redhoodsu
        alias[] = red
    ` + '\n'
    );
});
