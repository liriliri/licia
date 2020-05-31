const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 8001
});

wss.on('connection', ws => {
    ws.on('message', message => {
        ws.send(message);
    });
});
