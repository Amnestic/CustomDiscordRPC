// Template made by Amnestic

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
        smallImageKey: 'icon_name', // Insert a name of your image that you have set on your app. | Displays a image
        smallImageText: 'image_hover_text', // Text that will display when you hover over the image.
        largeImageKey: 'icon_name', // Insert a name of your image that you have set on your app. | Displays a image
        largeImageText: 'image_hover_text', // Text that will display when you hover over the image.
        instance: true
    });
});
rpc.login({
    clientId: '',
});