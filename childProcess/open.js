import {spawn} from 'child_process';

const app = spawn ('open',['-a', 'Freeform']);
 app.stdout.on('data',(data)=>{
    console.log(`Stdout: ${data}`)
 });
  app.stderr.on( 'data',(data)=>{
    console.log (`stderr: ${data}`)
  })