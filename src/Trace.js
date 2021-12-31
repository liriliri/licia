/* Parse, manipulate and generate chrome tracing data.
 */

/* example
 * const fs = require('fs');
 * const data = fs.readFileSync('path/to/trace', 'utf8');
 * const trace = new Trace(JSON.parse(data));
 * trace.rmProcess(627);
 * fs.writeFileSync(
 *     'path/to/trace',
 *     JSON.stringify(trace.toJSON()),
 *     'utf8',
 *     function() {}
 * );
 */

/* module
 * env: all
 * test: node
 */

/* typescript
 * export declare namespace Trace {
 *     interface IEvent {
 *         name: string;
 *         cat: string;
 *         ph: string;
 *         ts: number;
 *         pid: number;
 *         tid: number;
 *         args: any;
 *         [key: string]: any;
 *     }
 *     class Process {
 *         constructor(id);
 *         id(): string;
 *         name(): string;
 *         addEvent(IEvent): void;
 *         rmEvent(IEvent): void;
 *         getThread(id: number): Thread;
 *         rmThread(id: number): void;
 *         threads(): Thread[];
 *         toJSON(): IEvent[];
 *     }
 *     class Thread {
 *         constructor(id, pid);
 *         id(): string;
 *         name(): string;
 *         addEvent(IEvent): void;
 *         rmEvent(IEvent): void;
 *         events(): IEvent[];
 *         toJSON(): IEvent[];
 *     }
 * }
 * export declare class Trace {
 *     constructor(events: Trace.IEvent[]);
 *     addEvent(event: Trace.IEvent);
 *     rmEvent(event: Trace.IEvent);
 *     getProcess(id: number): Trace.Process;
 *     rmProcess(id: number): void;
 *     processes(): Trace.Process[];
 *     toJSON(): Trace.IEvent[];
 * }
 */

_('Class each map');

exports = Class({
    initialize: function Trace(events = []) {
        this._processes = {};

        each(events, event => this.addEvent(event));
    },
    addEvent(event) {
        const process = this.getProcess(event.pid);
        process.addEvent(event);
    },
    rmEvent(event) {
        const process = this.getProcess(event.pid);
        process.rmEvent(event);
    },
    getProcess(id) {
        let process = this._processes[id];
        if (!process) {
            process = new Process(id);
            this._processes[id] = process;
        }
        return process;
    },
    rmProcess(id) {
        delete this._processes[id];
    },
    processes() {
        return map(this._processes);
    },
    toJSON() {
        const events = [];

        each(this.processes(), process => {
            events.push.apply(events, process.toJSON());
        });

        return events;
    }
});

const Process = Class({
    initialize: function Process(id) {
        this._id = id;
        this._name = '';
        this._threads = {};
        this._metadata = {};
    },
    id() {
        return this._id;
    },
    name() {
        return this._name;
    },
    addEvent(event) {
        if (event.cat === '__metadata') {
            if (event.name === 'process_name') {
                this._name = event.args.name;
            }
            if (event.tid === 0) {
                this._metadata[event.name] = event.args;
                return;
            }
        }
        const thread = this.getThread(event.tid);
        thread.addEvent(event);
    },
    rmEvent(event) {
        const thread = this.getThread(event.tid);
        thread.rmEvent(event);
    },
    getThread(id) {
        let thread = this._threads[id];
        if (!thread) {
            thread = new Thread(id, this.id());
            this._threads[id] = thread;
        }
        return thread;
    },
    rmThread(id) {
        delete this._threads[id];
    },
    threads() {
        return map(this._threads);
    },
    toJSON() {
        const events = [];

        each(this._metadata, (args, name) => {
            events.push(createMetaEvent(this._id, 0, name, args));
        });

        each(this.threads(), thread => {
            events.push.apply(events, thread.toJSON());
        });

        return events;
    }
});

const Thread = Class({
    initialize: function Thread(id, pid) {
        this._id = id;
        this._pid = pid;
        this._name = '';
        this._events = [];
        this._metadata = {};
    },
    id() {
        return this._id;
    },
    name() {
        return this._name;
    },
    addEvent(event) {
        if (event.cat === '__metadata') {
            if (event.name === 'thread_name') {
                this._name = event.args.name;
            }
            this._metadata[event.name] = event.args;
            return;
        }
        this._events.push(event);
    },
    rmEvent(event) {
        const events = this._events;
        events.splice(events.indexOf(event), 1);
    },
    events() {
        return map(this._events);
    },
    toJSON() {
        const events = [];

        each(this._metadata, (args, name) => {
            events.push(createMetaEvent(this._pid, this._id, name, args));
        });

        each(this.events(), event => {
            events.push(event);
        });

        return events;
    }
});

function createMetaEvent(pid, tid, name, args) {
    return {
        args,
        cat: '__metadata',
        name,
        ph: 'M',
        pid,
        tid,
        ts: 0
    };
}
