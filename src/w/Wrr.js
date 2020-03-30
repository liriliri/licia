/* Weighted Round Robin implementation.
 *
 * ### size
 *
 * Pool size.
 *
 * ### set
 *
 * Set a value to the pool. Weight is updated if value already exists.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |val   |Value to set       |
 * |weight|Weight of the value|
 *
 * ### get
 *
 * Get weight of given value.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |val   |Value to get       |
 * |return|Weight of the value|
 *
 * ### remove
 *
 * Remove given value.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |val |Value to remove|
 *
 * ### next
 *
 * Get next value from pool.
 *
 * ### clear
 *
 * Clear all values.
 */

/* example
 * const pool = new Wrr();
 * pool.set('A', 4);
 * pool.set('B', 8);
 * pool.set('C', 2);
 * pool.next();
 * pool.remove('A');
 * console.log(pool.size); // -> 2
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Wrr {
 *     size: number;
 *     set(val: any, weight: number): void;
 *     get(val: any): number | void;
 *     remove(val: any): void;
 *     clear(): void;
 *     next(): any;
 * }
 */

_('Class max map reduce gcd filter');

exports = Class({
    initialize: function Wrr() {
        this._peers = [];
    },
    set(val, weight) {
        const peers = this._peers;
        const { size } = this;

        for (let i = 0; i < size; i++) {
            const peer = peers[i];
            if (peer.val === val) {
                peer.weight = weight;
                this._reset();
                return;
            }
        }

        peers.push({
            val,
            weight
        });
        this._reset();
    },
    get(val) {
        const peers = this._peers;
        const { size } = this;
        for (let i = 0; i < size; i++) {
            const peer = peers[i];
            if (peer.val === val) {
                return peer.weight;
            }
        }
    },
    remove(val) {
        this._peers = filter(this._peers, peer => peer.val !== val);

        this._reset();
    },
    next() {
        const peers = this._peers;
        const { size } = this;
        if (size === 0) return;

        // http://kb.linuxvirtualserver.org/wiki/Weighted_Round-Robin_Scheduling
        while (true /* eslint-disable-line */) {
            this._i = (this._i + 1) % size;
            if (this._i === 0) {
                this._cw = this._cw - this._gcdS;
                if (this._cw <= 0) {
                    this._cw = this._maxS;
                }
            }
            if (this._cw === 0) return;
            if (peers[this._i].weight >= this._cw) {
                return peers[this._i].val;
            }
        }
    },
    clear() {
        this._peers = [];
        this._reset();
    },
    _reset() {
        const peers = this._peers;
        this.size = peers.length;
        const weights = map(peers, peer => peer.weight);

        this._i = -1;
        this._cw = 0;
        this._maxS = max.apply(null, weights);
        this._gcdS = reduce(weights, (prev, weight) => gcd(prev, weight), 0);
    }
});
