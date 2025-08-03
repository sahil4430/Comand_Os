import { spawn } from 'child_process';
import os from 'node:os';

// only for macOS
// const app = spawn ('open',['-a', 'Freeform']);
//  app.stdout.on('data',(data)=>{
//     console.log(`Stdout: ${data}`)
//  });
//   app.stderr.on( 'data',(data)=>{
//     console.log (`stderr: ${data}`)
//   })

// for all OS we using diff aproach

function launchApp(appName, filePath = null) {
    const platform = os.platform();
    let command;
    let arg = [];
    switch (platform) {
        case 'darwin':
            command = 'open';
            arg = ['-a', appName];
            if (filePath) {
                arg.push(filePath);
            }
            break;
        case 'win32':
            command = 'cmd';
            arg = ['/c', 'start', '', `${appName}`];
            if (filePath) arg.push(filePath);
            break;
        case 'linux':
            command = appName.tolowerCase();
            if (filePath) arg.push(filePath);
            break;
        default:
            console.log("unsupported platform");
            return;
    }
    const app = spawn(command, arg);
    app.stdout.on('data', (data) => {
        console.log(`Stdout: ${data}. done launching ${appName}`);
    });
    app.stderr.on('data', (data) => {
        console.log(`stderrr : ${data}`)
    })
    app.on('error', (err) => {
        console.error(`Failed to start process: ${err}`);
    });
}
launchApp('Contacts');

