it('basic', function () 
{
    var data = new JsonTransformer({
        books: [{
            title: 'Book 1',
            price: 5
        }, {
            title: 'Book 2',
            price: 10
        }],
        author: {
            lastname: 'Su',
            firstname: 'RedHood'
        }
    });
    data.filter('books', function (book) { return book.price > 5; });
    data.compute('author', function (author) { return author.firstname + author.lastname; });
    data.set('count', data.get('books').length);
    expect(data.get()).to.eql({books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1});
});

it('get', function () 
{
    var data = new JsonTransformer({a: {b: 1}});

    expect(data.get('a')).to.eql({b: 1});
    expect(data.get('b')).to.be.an('undefined');
    expect(data.get('a.b')).to.equal(1);
    expect(data.get()).to.eql({a: {b: 1}});
});

it('set', function () 
{
    var data = new JsonTransformer();

    data.set('a', {b: 1});
    expect(data.get('a')).to.eql({b: 1});
    data.set('a.b', 2);
    expect(data.get('a')).to.eql({b: 2});
    data.set({a: 1});
    expect(data.get('a')).to.equal(1);
    data.set('b', undefined);
    expect(data.get('a')).to.equal(1);
});

it('map', function () 
{
    var data = new JsonTransformer([1, 2]);

    data.map(double);
    expect(data.get()).to.eql([2, 4]);

    data = new JsonTransformer({arr: [1, 2]});

    data.map('arr', double);
    expect(data.get('arr')).to.eql([2, 4]);
    data.map('arr', 'newArr', double);
    expect(data.get('newArr')).to.eql([4, 8]);

    function double(val) { return val * 2; }
});

it('remove', function () 
{
    var data = new JsonTransformer({a: 1, b: {c: 3}, d: 4});

    data.remove('a');
    expect(data.get()).to.eql({b: {c: 3}, d: 4});
    data.remove(['b.c', 'd']);
    expect(data.get()).to.eql({b: {}});
});

it('filter', function () 
{
    var data = new JsonTransformer([1, 2, 3, 4]);

    data.filter(odd);
    expect(data.get()).to.eql([1, 3]);

    data = new JsonTransformer({arr: [1, 2, 3, 4]});
    data.filter('arr', odd);
    expect(data.get('arr')).to.eql([1, 3]);
    data.filter('arr', 'newArr', odd);
    expect(data.get('newArr')).to.eql([1, 3]);

    function odd(val) { return val % 2 !== 0; }
});

it('compute', function () 
{
    var data = new JsonTransformer({a: 1});

    data.compute(function (val) 
    { 
        val.a = 2;
        return val;
    });
    expect(data.get()).to.eql({a: 2});

    data = new JsonTransformer({a: 1, b: 2});
    data.compute('a', function (val) { return val * 2; });
    expect(data.get('a')).to.equal(2);
    data.compute(['a', 'b'], 'c', function (a, b) { return a + b; });
    expect(data.get('c')).to.equal(4);
});

it('toString', function () 
{
    var data = new JsonTransformer({a: 1});
    
    expect(data + '').to.equal('{"a":1}');
});