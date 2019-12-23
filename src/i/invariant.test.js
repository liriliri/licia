const isNode = util.isNode;
const root = util.root;

it('development', () => {
    setEnv('development');
    expect(() => invariant(true, 'invariant message')).to.not.throw();
    expect(() => invariant(false, 'invariant message %s', 'a')).to.throw(
        'invariant message a'
    );
    expect(() => invariant(true)).to.throw('requires an error');
    expect(() => invariant(false)).to.throw('requires an error');
});

it('production', () => {
    setEnv('production');
    expect(() => invariant(true, 'invariant message')).to.not.throw();
    expect(() => invariant(false, 'invariant message')).to.throw(
        'invariant message'
    );
    expect(() => invariant(true)).to.not.throw();
    expect(() => invariant(false)).to.throw('Minified exception occurred');
});

function setEnv(env) {
    if (isNode) {
        process.env.NODE_ENV = env;
    } else {
        root.process = { env: { NODE_ENV: env } };
    }
}
