/* Output table string.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |rows  |Table data  |
 * |return|Table string|
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
 */

/* typescript
 * export declare function table(rows: Array<string[]>): string;
 */

_('each strWidth map repeat cloneDeep');

exports = function(rows) {
    rows = cloneDeep(rows);
    const options = {
        border: defBorder
    };

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
