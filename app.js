  
// Template made by Amnestic

const discRpc = require('discord-rpc');
require('dotenv').config();
const rpc = new discRpc.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: this.version,
        state: 'Description', // Just a basic description!
        startTimestamp: Date.now(),
        smallImageKey: 'icon',                 // Insert a name of your image that you have set on your app. | Displays a image
        smallImageText: 'image_hover_text',         // Text that will display when you hover over the image.
        largeImageKey: 'icon_name', 
        largeImageText: 'image_hover_text', 
        buttons: [ 
            { label: 'Button Name', url: 'Your URL goes here' } // <--- Button  | To add buttons just copy the line and replace the fields. For ex. { label: 'Button Name', url: 'Your URL goes here' } { label: 'Button Name', url: 'Your URL goes here' }
            
        ],
        instance: true
    });
});
rpc.login({
    clientId: process.env.clientId,
});