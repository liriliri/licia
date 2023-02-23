/* CSS media query listener.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name |Desc       |
 * |-----|-----------|
 * |query|Media query|
 *
 * ### setQuery
 *
 * Update query.
 *
 * ### isMatch
 *
 * Return true if given media query matches.
 *
 * ### Events
 *
 * #### match
 *
 * Triggered when a media query matches.
 *
 * #### unmatch
 *
 * Opposite of match.
 */

/* example
 * const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
 * mediaQuery.isMatch(); // -> false
 * mediaQuery.on('match', () => {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 * since: 1.5.2
 */

/* typescript
 * export declare class MediaQuery extends Emitter {
 *     constructor(query: string);
 *     setQuery(query: string): void;
 *     isMatch(): boolean;
 * }
 */

_('Emitter');

exports = Emitter.extend({
    className: 'MediaQuery',
    initialize(query) {
        this.callSuper(Emitter, 'initialize');

        this._listener = () => {
            this.emit(this.isMatch() ? 'match' : 'unmatch');
        };
        this.setQuery(query);
    },
    setQuery(query) {
        if (this._mql) {
            this._mql.removeListener(this._listener);
        }
        this._mql = window.matchMedia(query);

        this._mql.addListener(this._listener);
    },
    isMatch() {
        return this._mql.matches;
    }
});
