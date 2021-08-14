const discRpc = require('discord-rpc');
require('dotenv').config();
const rpc = new discRpc.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: this.version,
        state: 'Description',
        startTimestamp: Date.now(),
        smallImageKey: 'Random info',
        smallImageText: 'Random info',
        largeImageKey: 'icon',
        largeImageText: 'Random info',
        instance: true
    });
});
rpc.login({
    clientId: '876183898311233537',
});