// const { spawn } = require('node:child_process');
import { spawn } from 'node:child_process';

// code to get list of files in /usr directory
// using spawn method of child_process module
const ls = spawn( 'ls', ['-lh', '/usr']);
ls.stdout.on('data',(data)=>{
    console.log(`stdout:${data}`)
});

ls.stderr.on('data' , (data)=>{
    console.log(`stderr:${data}`);
})

ls.on('close',(code)=>{
    console.log(`child process exited with code ${code}`);
});

