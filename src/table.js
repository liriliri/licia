/* Output table string.
 *
 * |Name   |Desc         |
 * |-------|-------------|
 * |rows   |Table data   |
 * |options|Table options|
 * |return |Table string |
 *
 * ### parse
 *
 * Parse table string back to object.
 *
 * |Name   |Type         |
 * |-------|-------------|
 * |table  |Table string |
 * |options|Table options|
 * |return |Table data   |
 */

/* example
 * table([
 *     ['', 'firstName', 'lastName'],
 *     ['daughter', 'Emily', 'Smith'],
 *     ['father', 'John', 'Smith'],
 *     ['mother', 'Jane', 'Smith']
 * ]);
 */

/* module
 * env: all
 * since: 1.24.0
 */

/* typescript
 * export declare namespace table {
 *     interface IOptions {
 *         border?: {
 *             topBody?: string;
 *             topJoin?: string;
 *             topLeft?: string;
 *             topRight?: string;
 *             bottomBody?: string;
 *             bottomJoin?: string;
 *             bottomLeft?: string;
 *             bottomRight?: string;
 *             bodyLeft?: string;
 *             bodyRight?: string;
 *             bodyJoin?: string;
 *             joinBody?: string;
 *             joinLeft?: string;
 *             joinRight?: string;
 *             joinJoin?: string;
 *         };
 *     }
 *     function parse(table: string, options?: IOptions): Array<string[]>;
 * }
 * export declare function table(
 *     rows: Array<string[]>,
 *     options?: table.IOptions
 * ): string;
 */

_('each strWidth map repeat cloneDeep defaults trim rtrim filter');

exports = function(rows, options = {}) {
    rows = cloneDeep(rows);
    options.border = options.border || {};
    defaults(options.border, defBorder);

    options.columns = getColumns(rows);
    padData(rows, options);

    return render(rows, options);
};

function padData(rows, options) {
    const columnCount = options.columns.length;
    for (let i = 0, len = rows.length; i < len; i++) {
        while (rows[i].length < columnCount) {
            rows[i].push('');
        }
    }

    return loopData(rows, (data, row, column) => {
        const { paddingLeft, width, paddingRight } = options.columns[column];
        return (
            repeat(' ', paddingLeft) +
            data +
            repeat(' ', width - strWidth(data) - paddingRight)
        );
    });
}

function loopData(rows, handler) {
    for (let i = 0, len = rows.length; i < len; i++) {
        const row = rows[i];
        for (let j = 0, len = row.length; j < len; j++) {
            const data = handler(row[j], i, j);
            if (data) {
                row[j] = data;
            }
        }
    }
}

function getColumns(rows) {
    const columns = [];
    const paddingLeft = 1;
    const paddingRight = 1;

    loopData(rows, (data, row, column) => {
        columns[column] = columns[column] || {
            width: paddingLeft + paddingRight,
            paddingLeft,
            paddingRight
        };
        const width = strWidth(data) + paddingLeft + paddingRight;
        if (width > columns[column].width) {
            columns[column].width = width;
        }
    });

    return columns;
}

function render(rows, options) {
    let ret = '';

    ret += renderBorder('top', options);

    each(rows, (row, idx) => {
        ret += renderRow(row, options);

        if (idx === rows.length - 1) {
            ret += renderBorder('bottom', options);
        } else {
            ret += renderBorder('join', options);
        }
    });

    return ret;
}

function renderRow(columns, options) {
    const { border } = options;

    return (
        border.bodyLeft +
        columns.join(border.bodyJoin) +
        border.bodyRight +
        '\n'
    );
}

function renderBorder(type, options) {
    const { border, columns } = options;
    const left = border[type + 'Left'];
    const right = border[type + 'Right'];
    const body = border[type + 'Body'];
    const join = border[type + 'Join'];

    let ret = map(columns, column => repeat(body, column.width)).join(join);
    ret = left + ret + right;
    if (type !== 'bottom') {
        ret += '\n';
    }

    return ret;
}

exports.parse = function(table, options = {}) {
    options.border = options.border || {};
    defaults(options.border, defBorder);
    const lines = splitLines(table, options.border);

    return parseLines(lines, options);
};

function splitLines(table, border) {
    const lines = table.split(/\n/);
    const trimLines = [];
    let chars = ' ';
    each(border, val => (chars += val));
    each(lines, (line, idx) => {
        line = trim(line);
        line = trim(line, chars);
        trimLines[idx] = line;
    });

    return filter(lines, (line, idx) => trimLines[idx] !== '');
}

function parseLines(lines, options) {
    const { border } = options;

    let maxLen = 0;
    each(lines, line => {
        const len = strWidth(line);
        if (len > maxLen) {
            maxLen = len;
        }
    });
    lines = map(lines, line => line + repeat(' ', maxLen - strWidth(line)));

    let start = -1;
    let end = -1;
    const firstLine = lines[0];
    if (border.bodyLeft) {
        start = firstLine.indexOf(border.bodyLeft);
    }
    if (border.bodyRight) {
        end = firstLine.lastIndexOf(border.bodyRight);
    }
    lines = map(lines, line => {
        if (start > -1) {
            if (end > -1) {
                line = line.slice(start + 1, end);
            } else {
                line = line.slice(start + 1);
            }
        }
        return line;
    });
    maxLen = lines[0].length;

    const rows = [];
    const rowCount = lines.length;
    let column = [];
    for (let i = 0; i < maxLen; i++) {
        let isSeparator = true;
        let isFakeColumn = false;

        for (let r = 0; r < rowCount; r++) {
            column[r] = column[r] || '';
            const c = lines[r][i] || '';
            if (c !== border.bodyJoin) {
                isSeparator = false;
            }
            column[r] += lines[r][i];
        }

        if (isSeparator || i === maxLen - 1) {
            let emptyLineCount = 0;
            each(column, data => {
                data = rtrim(data, ' ' + border.bodyJoin);
                if (data === '') {
                    emptyLineCount++;
                }
            });
            if (emptyLineCount >= rowCount - 1) {
                isFakeColumn = true;
            }
            if (isSeparator) {
                column = map(column, data => data.slice(0, data.length - 1));
            }

            column = map(column, data => trim(data));
            for (let r = 0; r < rowCount; r++) {
                const row = rows[r] || [];
                const data = column[r];

                if (isFakeColumn) {
                    if (row.length !== 0 && data) {
                        row[row.length - 1] += border.bodyJoin + data;
                    }
                } else {
                    row.push(data);
                }

                rows[r] = row;
            }
            column = [];
        }
    }

    return rows;
}

const defBorder = {
    topBody: '─',
    topJoin: '┬',
    topLeft: '┌',
    topRight: '┐',
    bottomBody: '─',
    bottomJoin: '┴',
    bottomLeft: '└',
    bottomRight: '┘',
    bodyLeft: '│',
    bodyRight: '│',
    bodyJoin: '│',
    joinBody: '─',
    joinLeft: '├',
    joinRight: '┤',
    joinJoin: '┼'
};
