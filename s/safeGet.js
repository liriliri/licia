/* Get object property, don't throw undefined error.
 *
 * |Name  |Type        |Desc                     |
 * |------|------------|-------------------------|
 * |obj   |object      |Object to query          |
 * |path  |array string|Path of property to get  |
 * |return|*           |Target value or undefined|
 *
 * ```javascript
 * var obj = {a: {aa: [2,{b:33}]}};
 * safeGet(obj, 'a.aa[0]'); // -> 2
 * safeGet(obj, ['a', 'aa','1','b']); // -> 33
 * safeGet(obj, 'a.b'); // -> undefined
 * ```
 */

_('isStr isArr reduce');

function exports(obj, path)
{
  if (isArr(path)) {
    return reduce(path,function(ob,k){
    	return ob && ob[k] ? ob[k] : undefined;
    },obj)
  } else if (isStr(path)) {
    var arrKeys = path.split("."),
      keys = [],
      m;
    arrKeys.forEach(function(k){
      if ((m = k.match(/([^\[\]]+)|(\[\d+\])/g))) {  
        m = m.map(v => v.replace(/\[(\d+)\]/, "$1"));  
        [].push.apply(keys, m);
      }
    });
    return safeGet(obj, keys);
  }
}