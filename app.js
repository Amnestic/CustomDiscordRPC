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
        smallImageKey: 'Your Image Name', // Insert a name of your image that you have set on your app. | Displays a image
        smallImageText: 'Your Image Text', // Text that will display when you hover over the image.
        largeImageKey: 'icon', // Insert a name of your image that you have set on your app. | Displays a image
        largeImageText: 'Lavity | Official', // Text that will display when you hover over the image.
        instance: true
    });
});
rpc.login({
    clientId: '876183898311233537',
});