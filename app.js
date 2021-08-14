const discRpc = require('discord-rpc');
const rpc = new discRpc.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: this.version,
        state: 'Random State Info',
        startTimestamp: Date.now(),
        smallImageKey: 'Random info',
        smallImageText: 'Random info',
        largeImageKey: 'Random info',
        largeImageText: 'Random info',
        instance: true
    });
});
rpc.login({
    clientId: 'CLIENT TOKEN GOES HERE',
});