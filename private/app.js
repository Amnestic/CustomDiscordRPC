// Template made by Amnestic

const discRpc = require('discord-rpc');
require('dotenv').config();
const rpc = new discRpc.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: this.version,
        state: 'wanna play some rust? ', // Just a basic description!
        startTimestamp: Date.now(),
        smallImageKey: 'icon',                 // Insert a name of your image that you have set on your app. | Displays a image
        smallImageText: 'HALO join https://discord.gg/eRawNfGuJ8',         // Text that will display when you hover over the image.
        largeImageKey: 'icon_', 
        largeImageText: 'image_hover_text', 
        instance: true
    });
});
rpc.login({
    clientId: process.env.clientId,
});