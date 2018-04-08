var isBlob = util.isBlob;

it('basic', function () 
{
    var blob = new Blob([]);

    expect(isBlob(blob)).to.be.true;
    expect(blob.slice).to.be.a.function;
});