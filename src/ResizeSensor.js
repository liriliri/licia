/* Detect if element's size has changed.
 *
 * ### constructor
 *
 * |Name   |Desc                   |
 * |-------|-----------------------|
 * |element|Element to monitor size|
 *
 * ### destroy
 *
 * Stop monitoring resize event.
 */

/* example
 * const target = document.getElementById('test');
 * const sensor = new ResizeSensor(target);
 * sensor.addListener(function() {
 *     // Trigger if element's size changed.
 * });
 */

/* module
 * env: browser
 * since: 1.29.0
 */

/* typescript
 * export declare class ResizeSensor extends SingleEmitter {
 *     constructor(el: HTMLElement);
 *     destroy(): void;
 * }
 */

_('SingleEmitter h $event $css contain extend root');

if (root.ResizeObserver && !LICIA_TEST) {
    exports = SingleEmitter.extend({
        initialize: function ResizeSensor(el) {
            if (el._resizeSensor) {
                return el._resizeSensor;
            }
            this.callSuper(SingleEmitter, 'initialize');

            const resizeObserver = new root.ResizeObserver(() => this.emit());
            resizeObserver.observe(el);
            el._resizeSensor = this;
            this._resizeObserver = resizeObserver;
            this._el = el;
        },
        destroy() {
            const el = this._el;
            if (!el._resizeSensor) {
                return;
            }
            this.rmAllListeners();
            delete el._resizeSensor;
            this._resizeObserver.unobserve(el);
        }
    });
} else {
    // http://marcj.github.io/css-element-queries/
    exports = SingleEmitter.extend({
        initialize: function ResizeSensor(el) {
            if (el._resizeSensor) {
                return el._resizeSensor;
            }
            this.callSuper(SingleEmitter, 'initialize');

            this._el = el;
            el._resizeSensor = this;
            if (
                !contain(
                    ['absolute', 'relative', 'fixed', 'sticky'],
                    $css(el, 'position')
                )
            ) {
                $css(el, 'position', 'relative');
            }

            this._appendResizeSensor();
            this._bindEvent();
        },
        destroy() {
            const el = this._el;
            if (!el._resizeSensor) {
                return;
            }
            this.rmAllListeners();
            delete el._resizeSensor;
            el.removeChild(this._resizeSensorEl);
        },
        _appendResizeSensor() {
            const el = this._el;

            const style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            const styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s'
            };

            const expandChildEl = h('div', {
                style: styleChild
            });
            const expandEl = h(
                'div.resize-sensor-expand',
                {
                    style
                },
                expandChildEl
            );
            const shrinkEl = h(
                'div.resize-sensor-shrink',
                {
                    style
                },
                h('div', {
                    style: extend(
                        {
                            width: '200%',
                            height: '200%'
                        },
                        styleChild
                    )
                })
            );

            const resizeSensorEl = h(
                'div.resize-sensor',
                {
                    dir: 'ltr',
                    style
                },
                expandEl,
                shrinkEl
            );

            this._expandEl = expandEl;
            this._expandChildEl = expandChildEl;
            this._shrinkEl = shrinkEl;
            this._resizeSensorEl = resizeSensorEl;
            el.appendChild(resizeSensorEl);

            this._resetExpandShrink();
        },
        _bindEvent() {
            $event.on(this._expandEl, 'scroll', () => this._onScroll());
            $event.on(this._shrinkEl, 'scroll', () => this._onScroll());
        },
        _onScroll() {
            this.emit();

            this._resetExpandShrink();
        },
        _resetExpandShrink() {
            const el = this._el;
            const width = el.offsetWidth;
            const height = el.offsetHeight;

            $css(this._expandChildEl, {
                width: width + 10,
                height: height + 10
            });

            extend(this._expandEl, {
                scrollLeft: width + 10,
                scrollTop: height + 10
            });

            extend(this._shrinkEl, {
                scrollLeft: width + 10,
                scrollTop: height + 10
            });
        }
    });
}
