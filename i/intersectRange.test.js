it('basic', function () 
{
    expect(intersectRange({
        start: 0, end: 12
    }, {
        start: 11, end: 13
    })).to.eql({
        start: 11, end: 12
    });
    
    expect(intersectRange({start: 0, end: 5}, {start: 6, end: 7})).to.be.undefined;
});