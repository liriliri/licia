/* Key codes and key names conversion.
 *
 * Get key code's name.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |code  |number|Key code              |
 * |return|string|Corresponding key name|
 *
 * Get key name's code.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |name  |string|Key name              |
 * |return|number|Corresponding key code|
 */

/* example
 * keyCode(13); // -> 'enter'
 * keyCode('enter'); // -> 13
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function keyCode(name: string): number;
 * export declare function keyCode(code: number): string;
 */

_('isStr invert');

exports = function(val) {
    if (isStr(val)) return codeMap[val];

    return nameMap[val];
};

var codeMap = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    'pause/break': 19,
    'caps lock': 20,
    esc: 27,
    space: 32,
    'page up': 33,
    'page down': 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    windows: 91,
    'right windows': 92,
    'windows menu': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
};

// Lower case chars
for (var i = 97; i < 123; i++) codeMap[String.fromCharCode(i)] = i - 32;
// Numbers
for (i = 48; i < 58; i++) codeMap[i - 48] = i;
// Function keys
for (i = 1; i < 13; i++) codeMap['f' + i] = i + 111;
// Numpad keys
for (i = 0; i < 10; i++) codeMap['numpad ' + i] = i + 96;

var nameMap = invert(codeMap);
