expect(notify).to.be.a('function');
expect(notify.Notification).to.be.a('function');

notify('licia', {
    body: 'This is the notification content'
});
