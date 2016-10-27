/* Determine if running on a high DPR device or not.
 *
 * ```javascript
 * isRetina(); // -> true if high DPR
 * ```
 */

var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)';

function exports()
{
    return window.devicePixelRatio > 1.25 ||
           window.matchMedia && window.matchMedia(mediaQuery).matches;
}