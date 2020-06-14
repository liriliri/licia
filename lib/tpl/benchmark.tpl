const benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const util = require('./<%=modName%>.util.js');

const <%=modName%> = util.<%=modName%>;
const suite = new benchmark.Suite();

suite.on('start', function () {
    console.log('<%=modName%> benchmark');
}).on('cycle', function (event) {
    benchmarks.add(event.target);
}).on('complete', function () {
    benchmarks.log();
});

<%=data%>

