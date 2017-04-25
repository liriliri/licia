it('basic', function () 
{
    expect(abbrev()).to.eql({});
    expect(abbrev('a')).to.eql({a: 'a'});
    expect(abbrev('lina', 'luna')).to.eql({
        li: 'lina', 
        lin: 'lina', 
        lina: 'lina', 
        lu: 'luna', 
        lun: 'luna', 
        luna: 'luna'
    });
    expect(abbrev('fool', 'foom', 'pool', 'pope')).to.eql({
        fool: 'fool',
        foom: 'foom',
        poo: 'pool',
        pool: 'pool',
        pop: 'pope',
        pope: 'pope'
    });
    expect(abbrev('ruby', 'ruby', 'rules', 'rules')).to.eql({
        rub: 'ruby', 
        ruby: 'ruby', 
        rul: 'rules',
        rule: 'rules', 
        rules: 'rules' 
    });
    expect(abbrev('foo', 'fool', 'folding', 'flop')).to.eql({
        fl: 'flop', 
        flo: 'flop', 
        flop: 'flop', 
        fol: 'folding', 
        fold: 'folding', 
        foldi: 'folding', 
        foldin: 'folding', 
        folding: 'folding', 
        foo: 'foo', 
        fool: 'fool'
    });
    expect(abbrev('a', 'ab', 'abc', 'abcd', 'abcde', 'acde')).to.eql({
        a: 'a',
        ab: 'ab',
        abc: 'abc',
        abcd: 'abcd',
        abcde: 'abcde',
        ac: 'acde',
        acd: 'acde',
        acde: 'acde'
    });
});