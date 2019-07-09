/* CSS media query listener.
 *
 * Extend from Emitter.
 * 
 * ### constructor
 * 
 * |Name |Type  |Desc       |
 * |-----|------|-----------|
 * |query|string|Media query|
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
 * test: browser
 * since: 1.5.2
 */

/* typescript
 * export declare class MediaQuery extends Emitter {
 *     constructor(query: string);
 *     isMatch(): boolean;
 * }
 */

_('Emitter');

exports = Emitter.extend({
    className: 'MediaQuery',
    initialize(query) {
        this.callSuper(Emitter, 'initialize');

        this._mql = window.matchMedia(query);

        this._mql.addListener(() => {
            this.emit(this.isMatch() ? 'match' : 'unmatch');
        });
    },
    isMatch() {
        return this._mql.matches;
    }
});
