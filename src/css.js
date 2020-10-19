/* Css parser and serializer.
 *
 * Comments will be stripped.
 *
 * ### parse
 *
 * Parse css into js object.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |css   |Css string      |
 * |return|Parsed js object|
 *
 * ### stringify
 *
 * Stringify object into css.
 *
 * |Name      |Desc               |
 * |----------|-------------------|
 * |stylesheet|Object to stringify|
 * |options   |Stringify options  |
 * |return    |Css string         |
 *
 * Options:
 *
 * |Name       |Desc                 |
 * |-----------|---------------------|
 * |indent='  '|String used to indent|
 */

/* example
 * const stylesheet = css.parse('.name { background: #000; color: red; }');
 * // {type: 'stylesheet', rules: [{type: 'rule', selector: '.name', declarations: [...]}]}
 * css.stringify(stylesheet);
 */

/* module
 * env: all
 * since: 1.14.0
 */

/* typescript
 * export declare const css: {
 *     parse(css: string): object;
 *     stringify(stylesheet: object, options?: { indent?: string }): string;
 * };
 */

_('Class trim repeat defaults camelCase');

// https://github.com/reworkcss/css
exports = {
    parse(css) {
        return new Parser(css).parse();
    },
    stringify(stylesheet, options) {
        return new Compiler(stylesheet, options).compile();
    }
};

const regComments = /(\/\*[\s\S]*?\*\/)/gi;
const regOpen = /^{\s*/;
const regClose = /^}/;
const regWhitespace = /^\s*/;
const regProperty = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
const regValue = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
const regSelector = /^([^{]+)/;
const regSemicolon = /^[;\s]*/;
const regColon = /^:\s*/;
const regMedia = /^@media *([^{]+)/;
const regKeyframes = /^@([-\w]+)?keyframes\s*/;
const regFontFace = /^@font-face\s*/;
const regSupports = /^@supports *([^{]+)/;
const regIdentifier = /^([-\w]+)\s*/;
const regKeyframeSelector = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/;
const regComma = /^,\s*/;

const Parser = Class({
    initialize: function Parser(css) {
        this.input = stripCmt(css);

        this.open = this._createMatcher(regOpen);
        this.close = this._createMatcher(regClose);
        this.whitespace = this._createMatcher(regWhitespace);
        this.atImport = this._createAtRule('import');
        this.atCharset = this._createAtRule('charset');
        this.atNamespace = this._createAtRule('namespace');
    },
    parse() {
        return this.stylesheet();
    },
    stylesheet() {
        return {
            type: 'stylesheet',
            rules: this.rules()
        };
    },
    rules() {
        let rule;
        const rules = [];
        this.whitespace();
        while (
            this.input.length &&
            this.input[0] !== '}' &&
            (rule = this.atRule() || this.rule())
        ) {
            rules.push(rule);
            this.whitespace();
        }

        return rules;
    },
    atRule() {
        if (this.input[0] !== '@') return;

        return (
            this.atKeyframes() ||
            this.atMedia() ||
            this.atSupports() ||
            this.atImport() ||
            this.atCharset() ||
            this.atNamespace() ||
            this.atFontFace()
        );
    },
    atKeyframes() {
        let matched = this.match(regKeyframes);
        if (!matched) return;

        const vendor = matched[1] || '';

        matched = this.match(regIdentifier);
        if (!matched) throw Error('@keyframes missing name');

        const name = matched[1];

        if (!this.open()) throw Error(`@keyframes missing '{'`);
        const keyframes = [];
        let keyframe;
        while ((keyframe = this.keyframe())) {
            keyframes.push(keyframe);
        }
        if (!this.close()) throw Error(`@keyframes missing '}'`);

        return {
            type: 'keyframes',
            name,
            vendor,
            keyframes
        };
    },
    keyframe() {
        const selector = [];
        let matched;
        while ((matched = this.match(regKeyframeSelector))) {
            selector.push(matched[1]);
            this.match(regComma);
        }
        if (!selector.length) return;

        this.whitespace();
        return {
            type: 'keyframe',
            selector: selector.join(', '),
            declarations: this.declarations()
        };
    },
    atSupports() {
        const matched = this.match(regSupports);
        if (!matched) return;

        const supports = trim(matched[1]);

        if (!this.open()) throw Error(`@supports missing '{'`);
        const rules = this.rules();
        if (!this.close()) throw Error(`@supports missing '}'`);

        return {
            type: 'supports',
            supports,
            rules
        };
    },
    atFontFace() {
        const matched = this.match(regFontFace);
        if (!matched) return;

        if (!this.open()) throw Error(`@font-face missing '{'`);
        let declaration;
        const declarations = [];
        while ((declaration = this.declaration())) {
            declarations.push(declaration);
        }
        if (!this.close()) throw Error(`@font-face missing '}'`);

        return {
            type: 'font-face',
            declarations
        };
    },
    atMedia() {
        const matched = this.match(regMedia);
        if (!matched) return;

        const media = trim(matched[1]);

        if (!this.open()) throw Error(`@media missing '{'`);
        this.whitespace();
        const rules = this.rules();
        if (!this.close()) throw Error(`@media missing '}'`);

        return {
            type: 'media',
            media,
            rules
        };
    },
    rule() {
        const selector = this.selector();

        if (!selector) throw Error('missing selector');

        return {
            type: 'rule',
            selector,
            declarations: this.declarations()
        };
    },
    declarations() {
        const declarations = [];
        if (!this.open()) throw Error(`missing '{'`);
        this.whitespace();
        let declaration;
        while ((declaration = this.declaration())) {
            declarations.push(declaration);
        }
        if (!this.close()) throw Error(`missing '}'`);
        this.whitespace();
        return declarations;
    },
    declaration() {
        let property = this.match(regProperty);
        if (!property) return;
        property = trim(property[0]);

        if (!this.match(regColon)) throw Error(`property missing ':'`);

        const value = this.match(regValue);

        this.match(regSemicolon);

        this.whitespace();
        return {
            type: 'declaration',
            property,
            value: value ? trim(value[0]) : ''
        };
    },
    selector() {
        const matched = this.match(regSelector);
        if (!matched) return;

        return trim(matched[0]);
    },
    match(reg) {
        const matched = reg.exec(this.input);
        if (!matched) return;
        this.input = this.input.slice(matched[0].length);
        return matched;
    },
    _createMatcher(reg) {
        return () => this.match(reg);
    },
    _createAtRule(name) {
        const reg = new RegExp('^@' + name + '\\s*([^;]+);');
        return function() {
            const matched = this.match(reg);
            if (!matched) return;

            const ret = {
                type: name
            };

            ret[name] = trim(matched[1]);
            return ret;
        };
    }
});

const Compiler = Class({
    initialize: function Compiler(input, options = {}) {
        defaults(options, {
            indent: '  '
        });
        this.input = input;
        this.indentLevel = 0;
        this.indentation = options.indent;
    },
    compile() {
        return this.stylesheet(this.input);
    },
    stylesheet(node) {
        return this.mapVisit(node.rules, '\n\n');
    },
    media(node) {
        return (
            '@media ' +
            node.media +
            ' {\n' +
            this.indent(1) +
            this.mapVisit(node.rules, '\n\n') +
            this.indent(-1) +
            '\n}'
        );
    },
    keyframes(node) {
        return (
            `@${node.vendor}keyframes ` +
            node.name +
            ' {\n' +
            this.indent(1) +
            this.mapVisit(node.keyframes, '\n') +
            this.indent(-1) +
            '\n}'
        );
    },
    supports(node) {
        return (
            `@supports ` +
            node.supports +
            ' {\n' +
            this.indent(1) +
            this.mapVisit(node.rules, '\n\n') +
            this.indent(-1) +
            '\n}'
        );
    },
    keyframe(node) {
        return this.rule(node);
    },
    mapVisit(nodes, delimiter) {
        let str = '';
        for (let i = 0, len = nodes.length; i < len; i++) {
            const node = nodes[i];
            str += this[camelCase(node.type)](node);
            if (delimiter && i < len - 1) str += delimiter;
        }
        return str;
    },
    fontFace(node) {
        return (
            '@font-face {\n' +
            this.indent(1) +
            this.mapVisit(node.declarations, '\n') +
            this.indent(-1) +
            '\n}'
        );
    },
    rule(node) {
        return (
            this.indent() +
            node.selector +
            ' {\n' +
            this.indent(1) +
            this.mapVisit(node.declarations, '\n') +
            this.indent(-1) +
            '\n' +
            this.indent() +
            '}'
        );
    },
    declaration(node) {
        return this.indent() + node.property + ': ' + node.value + ';';
    },
    import(node) {
        return `@import ${node.import};`;
    },
    charset(node) {
        return `@charset ${node.charset};`;
    },
    namespace(node) {
        return `@namespace ${node.namespace};`;
    },
    indent(level) {
        if (level) {
            this.indentLevel += level;
            return '';
        }

        return repeat(this.indentation, this.indentLevel);
    }
});

const stripCmt = str => str.replace(regComments, '');
