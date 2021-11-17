const util = require('./<%=modName%>.util');

const <%=modName%> = util.<%=modName%>;
const Benchmark = util.Benchmark;
const map = util.map;
    
console.log('<%=modName%> benchmark');

function benchmark(benches) {
    benches = map(benches, (bench, key) => {
        return new Benchmark(bench, { name: key });
    });
    return Benchmark.all(benches).then(results => console.log(String(results))).catch(e => console.error(e));
}

<%=data%>

