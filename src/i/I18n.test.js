const i18n = new I18n('en', {
    en: {
        welcome: 'Hello, {{name}}!',
        curTime(data) {
            return 'Current time is ' + data.time;
        }
    },
    cn: {
        welcome: '你好，{{name}}！'
    }
});
i18n.set('cn', {
    curTime(data) {
        return '当前时间是 ' + data.time;
    }
});
expect(i18n.t('welcome', { name: 'licia' })).to.equal('Hello, licia!');
i18n.locale('cn');
expect(i18n.t('curTime', { time: '5:47 pm' })).to.equal('当前时间是 5:47 pm');
