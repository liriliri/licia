it('basic', function () 
{
    expect(isJson('{"a": 5}')).to.be.true;
    expect(isJson('{\'a\': 5}')).to.be.false;
});