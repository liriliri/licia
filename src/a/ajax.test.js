var sinon = require('sinon');

var requests = [];

before(function() {
    var fakeXMLHttpRequest = sinon.useFakeXMLHttpRequest();

    fakeXMLHttpRequest.onCreate = function(xhr) {
        requests.push(xhr);
    };
    ajax.setting.xhr = function() {
        return new fakeXMLHttpRequest();
    };
});

beforeEach(function() {
    requests = [];
});

it('basic', function(done) {
    expect(ajax).to.be.a('function');

    ajax({
        url: 'test',
        success: function(res) {
            expect(res).to.eql({ a: 1, b: 2 });
            done();
        }
    });

    var request = requests[0];

    expect(request.method).to.equal('GET');
    expect(request.requestBody).to.be.a('null');

    request.respond(200, {}, '{"a":1,"b":2}');
});

it('request data', function(done) {
    ajax({
        url: 'test',
        data: { a: 1 },
        success: function() {}
    });

    var request = requests[0];

    expect(request.url).to.equal('test?a=1');
    request.respond(200, {}, '');

    ajax({
        type: 'post',
        url: 'test',
        data: { a: 1, b: 2 },
        success: function() {}
    });

    request = requests[1];
    expect(request.requestBody).to.equal('a=1&b=2');
    request.respond(200, {}, '');

    ajax({
        type: 'post',
        url: 'test',
        data: 'test',
        success: function() {
            done();
        }
    });

    request = requests[2];
    expect(request.requestBody).to.equal('test');
    request.respond(200, {}, '');
});

it('get', function(done) {
    ajax.get(
        'test',
        { a: 1 },
        function(res) {
            expect(res).to.eql({ a: 1 });
        },
        'json'
    );

    var request = requests[0];

    expect(request.url).to.equal('test?a=1');
    request.respond(200, {}, '{"a":1}');

    ajax.get(
        'test',
        function(res) {
            expect(res).to.eql({ a: 1 });
            done();
        },
        'json'
    );

    request = requests[1];
    request.respond(200, {}, '{"a": 1}');
});

it('post', function(done) {
    ajax.post(
        'test',
        { a: 1 },
        function(res) {
            expect(res).to.eql({ a: 1 });
            done();
        },
        'json'
    );

    var request = requests[0];
    expect(request.requestBody).to.equal('a=1');
    request.respond(200, {}, '{"a": 1}');
});

it('post json', function(done) {
    ajax({
        type: 'post',
        url: 'test',
        data: { foo: 'bar' },
        contentType: 'application/json',
        success: function() {
            done();
        }
    });

    var request = requests[0];

    expect(request.requestBody).to.equal('{"foo":"bar"}');
    request.respond(200, {}, '{"a": 1}');
});

it('error', function(done) {
    ajax({
        url: 'test',
        error: function(xhr) {
            expect(xhr.status).to.equal(500);
            done();
        }
    });

    var request = requests[0];

    request.respond(500, {}, 'Error');
});

it('xml dataType', function(done) {
    var xhr = ajax.get(
        'test',
        function(res) {
            // It's not going to work in nodejs environment because of sinon's implementation details.
            expect(res).to.equal(xhr.responseXML);
            done();
        },
        'xml'
    );

    var request = requests[0];

    request.respond(200, { 'Content-Type': 'text/xml' }, '<html>test</html>');
});

it('complete', function(done) {
    ajax({
        url: 'test',
        complete: function(xhr) {
            expect(xhr).to.equal(xhr);
        }
    });

    var request = requests[0];

    request.respond(200, {}, '');

    ajax({
        url: 'test',
        complete: function() {
            done();
        }
    });

    request = requests[1];
    request.respond(500, {}, '');
});

it('timeout', function(done) {
    ajax({
        url: 'test',
        timeout: 50,
        error: function(xhr, type) {
            expect(type).to.equal('timeout');
            done();
        }
    });

    var request = requests[0];

    setTimeout(function() {
        request.respond(200, {}, '');
    }, 100);
});
