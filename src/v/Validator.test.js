it('validate data', function() {
    const validator = new Validator({
        test: {
            required: true
        }
    });

    expect(validator.validate({ test: 1 })).to.be.true;
    expect(validator.validate({})).to.equal('test is required');
});

it('custom function', function() {
    const validator = new Validator({
        test: function(val) {
            return !!(val && val.length === 6);
        }
    });

    expect(validator.validate({ test: 'tttttt' })).to.be.true;
    expect(validator.validate({})).to.be.false;
    expect(validator.validate({ test: 'ttt' })).to.be.false;
});

it('default plugins', function() {
    const validator = new Validator({
        testNum: {
            number: true
        },
        testStr: {
            string: true
        },
        testBool: {
            boolean: true
        },
        testRegExp: {
            regexp: /\d+/g
        }
    });

    expect(validator.validate({ testNum: 5 })).to.be.true;
    expect(validator.validate({ testNum: '' })).to.equal(
        'testNum should be a number'
    );

    expect(validator.validate({ testStr: '' })).to.be.true;
    expect(validator.validate({ testStr: 5 })).to.equal(
        'testStr should be a string'
    );

    expect(validator.validate({ testBool: true })).to.be.true;
    expect(validator.validate({ testBool: '' })).to.equal(
        'testBool should be a boolean'
    );

    expect(validator.validate({ testRegExp: '1234' })).to.be.true;
    expect(validator.validate({ testRegExp: 't' })).to.equal(
        'testRegExp should match given regexp /\\d+/g'
    );
});

it('add plugin', function() {
    Validator.addPlugin('custom', function(val, key, config) {
        if (config && typeof val !== 'number')
            return key + ' should be a number';

        return true;
    });

    const validator = new Validator({
        test: {
            custom: true
        }
    });

    expect(validator.validate({ test: 'a' })).to.equal(
        'test should be a number'
    );
    expect(validator.validate({ test: 5 })).to.be.true;
});
