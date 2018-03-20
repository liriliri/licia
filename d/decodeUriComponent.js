/* Better decodeURIComponent that does not throw if input is invalid.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to decode|
 * |return|string|Decoded string  |
 * 
 * ```javascript
 * decodeUriComponent('%%25%'); // -> ''
 * ```
 */ 

/* module
 * env: all
 * test: all
 */ 

function exports(str) 
{
    try 
    {
        return decodeURIComponent(str);
    } catch (e) 
    {
        return '';
    }
} 
