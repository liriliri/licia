console.log('cgroup version', cgroup.version());
console.log('cpu stat', cgroup.cpu.stat());
console.log('cpu max', cgroup.cpu.max());
console.log('cpuset cpus', cgroup.cpuset.cpus());
console.log('memory max', cgroup.memory.max());
console.log('memory current', cgroup.memory.current());
