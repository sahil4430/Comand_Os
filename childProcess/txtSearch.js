import {spawn} from 'child_process';
// const dirname = 'web';
// const find = spawn('find',['/', '-type', 'd','-name', dirname]);
// const find = spawn('find', ['/Users', '/Applications', '/Volumes'], ['-type', 'd', '-iname', '*web*']);

// find.stdout.on('data',(data)=>{
//     console.log(data.toString());
// });
// find.stderr.on('data',(data)=>{
//     console.error(`AError:${data.toString()}`)
// });
// find.on('close',(code)=>{
//     console.log(`childprossess exited with ${code}`)
// });
const find = spawn('find', [
  '/Users',
  '/Applications',
  '/Volumes',
  '-type',
  'd',
  '-iname',
  '*nexttttttttttttttt$*'
]);

find.stdout.on('data', (data) => {
  console.log(data.toString());
});

find.stderr.on('data', (data) => {
  const msg = data.toString();
  if ( msg && !msg.includes('Operation not permitted') && !msg.includes('Permission denied')) {
    console.error(`AError: ${msg}`);
  }
});

find.on('close', (code) => {
  console.log(`childprocess exited with code ${code}`);
});
