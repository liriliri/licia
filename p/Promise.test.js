var adapter = {
    resolved: Promise.resolve,
	rejected: Promise.rejected,
	deferred: function() 
    {
		var obj = {};
		var prom = new Promise(function(resolve, reject) 
        {
			obj.resolve = resolve;
			obj.reject = reject;
		});
		obj.promise = prom;

		return obj;
	}
};

require('promises-aplus-tests').mocha(adapter);

it('all', function (done) 
{
	expect(Promise.all([])).to.be.an.instanceof(Promise);

	var step = 0;

	Promise.all([new Promise(function (resolve) 
	{
		resolve('a');
	}), new Promise(function (resolve) 
	{
		resolve('b');
	})]).then(function (results) 
	{
		expect(results).to.eql(['a', 'b']);
		step++;
		if (step === 2) done();
	});

	Promise.all([new Promise(function (resolve) 
	{
		resolve('a');
	}), new Promise(function (resolve, reject) 
	{
		throw new Error('error');
	})]).catch(function (val) 
	{
		expect(val).to.be.an('error');
		step++;
		if (step === 2) done();
	});
});

it('reject', function (done) 
{
	var promise = Promise.reject('a');

	promise.catch(function (val) 
	{
		expect(val).to.equal('a');
		done();
	});
});

it('race', function (done) 
{
	expect(Promise.race([])).to.be.an.instanceof(Promise);

	Promise.race([new Promise(function (resolve) 
	{
		resolve('a');
	}), new Promise(function (resolve) 
	{
		setTimeout(function () { resolve('b') }, 50);
	})]).then(function (val) 
	{
		expect(val).to.equal('a');
		done();
	});
});