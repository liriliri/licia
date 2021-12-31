/* Easily create chrome tracing data.
 *
 * ### constructor
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |options|Tracing options|
 *
 * Available options:
 *
 * |Name       |Desc        |
 * |-----------|------------|
 * |pid        |Process id  |
 * |tid        |Thread id   |
 * |processName|Process name|
 * |threadName |Thread name |
 *
 * ### start
 *
 * Start recording.
 *
 * |Name|Desc              |
 * |----|------------------|
 * |cat |Enabled categories|
 *
 * ### stop
 *
 * Stop recording and get result events.
 *
 * ### begin
 *
 * Record begin event.
 *
 * |Name|Desc            |
 * |----|----------------|
 * |cat |Event categories|
 * |name|Event name      |
 * |args|Arguments       |
 *
 * ### end
 *
 * Record end event.
 *
 * ### beginWithId
 *
 * Record begin event, and an unique id is required.
 *
 * ### endWithId
 *
 * Record end event, and an unique id is required.
 *
 * ### instant
 *
 * Record instant event.
 *
 * ### id
 *
 * Get an unique id.
 */

/* example
 * const fs = require('fs');
 * const tracing = new Tracing();
 * tracing.start();
 * tracing.begin('cat', 'name');
 * // Do something...
 * tracing.end();
 * fs.writeFileSync(
 *     'path/to/trace',
 *     JSON.stringify(tracing.stop()),
 *     'utf8',
 *     function() {}
 * );
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Tracing {
 *     constructor(options?: {
 *         pid?: number;
 *         tid?: number;
 *         processName?: string;
 *         threadName?: string;
 *     });
 *     start(cat?: string): void;
 *     stop(): Trace.IEvent[];
 *     metadata(name: string, args: any): void;
 *     begin(cat: string, name: string, args?: any): void;
 *     end(args?: any): void;
 *     beginWithId(cat: string, name: string, id?: string, args?: any): string;
 *     endWithId(id: string, args?: any): void;
 *     instant(
 *         cat: string,
 *         name: string,
 *         scope?: 'g' | 'p' | 't',
 *         args?: any
 *     ): void;
 *     id(): string;
 * }
 */

_(
    'Class Trace perfNow extend isNode Stack map trim isEmpty intersect convertBase'
);

let defPid = 0;
let defTid = 0;
let id = 0;

if (isNode) {
    defPid = process.pid;
    try {
        defTid = eval('require')('worker_threads').threadId;
    } catch (e) {
        /* eslint-disable no-empty */
    }
}

exports = Class({
    initialize: function Tracing({
        pid = defPid,
        tid = defTid,
        processName = 'Process',
        threadName = 'Thread'
    } = {}) {
        this._pid = pid;
        this._tid = tid;
        this._processName = processName;
        this._threadName = threadName;
        this._traceEventStack = new Stack();
    },
    start(cat = '') {
        this._targetCat = processCat(cat);
        if (!isEmpty(this._targetCat)) {
            this._targetCat.push('__metadata');
        }
        this._traceEventStack = new Stack();
        this._traceEventMap = {};
        this._trace = new Trace();

        this.metadata(
            'process_name',
            {
                name: this._processName
            },
            {
                tid: 0,
                ts: 0
            }
        );
        this.metadata(
            'thread_name',
            {
                name: this._threadName
            },
            {
                ts: 0
            }
        );
    },
    stop() {
        const trace = this._trace;
        delete this._trace;
        return trace.toJSON();
    },
    metadata(name, args, extra) {
        this._addEvent('__metadata', name, Phase.Metadata, args, extra);
    },
    begin(cat, name, args = {}) {
        this._traceEventStack.push({
            cat,
            name,
            args,
            ts: this._getCurTs()
        });
    },
    end(args) {
        const beginEvent = this._traceEventStack.pop();
        if (!beginEvent) {
            return;
        }
        const { cat, name, ts } = beginEvent;
        args = extend(beginEvent.args, args);
        this._addEvent(cat, name, Phase.Complete, args, {
            dur: this._getCurTs() - ts,
            ts
        });
    },
    beginWithId(cat, name, id = this.id(), args = {}) {
        this._traceEventMap[id] = {
            cat,
            name
        };
        this._addEvent(cat, name, Phase.Begin, args, {
            id
        });

        return id;
    },
    endWithId(id, args = {}) {
        const traceBeginEvent = this._traceEventMap[id];
        if (!traceBeginEvent) {
            return;
        }

        const { cat, name } = traceBeginEvent;
        delete this._traceEventMap[id];
        this._addEvent(cat, name, Phase.End, args, {
            id
        });
    },
    instant(cat, name, scope = 't', args) {
        this._addEvent(cat, name, Phase.Instant, args, {
            s: scope
        });
    },
    id() {
        return '0x' + convertBase(id++, 10, 16);
    },
    _addEvent(cat, name, ph, args = {}, extra = {}) {
        if (!this._trace) {
            return;
        }
        const targetCat = this._targetCat;
        if (!isEmpty(targetCat)) {
            const catArr = processCat(cat);
            if (isEmpty(intersect(catArr, targetCat))) {
                return;
            }
        }
        const event = extend(
            {
                name,
                cat,
                ph,
                ts: this._getCurTs(),
                pid: this._pid,
                tid: this._tid,
                args
            },
            extra
        );
        this._trace.addEvent(event);
    },
    _getCurTs() {
        return Math.round(perfNow() * 1000);
    }
});

const Phase = {
    Begin: 'B',
    End: 'E',
    Complete: 'X',
    Instant: 'I',
    Metadata: 'M'
};

function processCat(cat) {
    cat = trim(cat);
    if (cat === '') {
        return [];
    }
    return map(cat.split(','), trim);
}
