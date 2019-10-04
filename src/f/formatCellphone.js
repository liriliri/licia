/* Format a cellphone number into international format or local format.
 *
 * |Name               |Type   |Desc                                                  |
 * |-------------------|-------|------------------------------------------------------|
 * |cellphoneNumber    |string |cellphone number to format                            |
 * |internationalString|string |international string used for cellphone number        |
 * |international=false|boolean|should the number be converted to international format|
 * |return             |string |new formatted cellphone number                        |
 */

/* example
 * formatCellphone('0820000001', '+27', true);   // -> '+27820000001'
 * formatCellphone('0820000001', '+27');         // -> '0820000001'
 * formatCellphone('+27820000001', '+27', true); // -> '+27820000001'
 * formatCellphone('+27820000001', '+27');       // -> '0820000001'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function formatCellphone(
 *     cellphoneNumber: string,
 *     internationalString: string
 * ): string;
 */

exports = function (cellNumber, internationalString, internationFormat = false) {
  if (cellNumber[0] === '0') {
    return internationFormat ? `${internationalString}${cellNumber.slice(1)}` : cellNumber;
  }
  if (cellNumber.indexOf(internationalString) === 0) {
    return internationFormat ? cellNumber : `0${cellNumber.replace(internationalString, '')}`;
  }
}
