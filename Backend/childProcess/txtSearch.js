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

export  function SearchFile(dirname){
  return new Promise ((resolve,reject)=>{
    const result =[];
  const find = spawn('find', [
  '/Users',
  '/Applications',
  '/System/Applications',
  '/Volumes',
  '-type','f',
  '-iname',
  `*${dirname}*`
]);

find.stdout.on('data', (data) => {
  const output = data.toString();
  if(output){
    const line  = output.split('/n').filter(line => line.trim());
    result.push(...lines);
  }
  console.log(`found:`, output);
  // result.push(data.toString());
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

setTimeout(() => {
  find.kill();
  reject( new error ('search timeout'))
}, 30000);
  });

}

export default SearchFile;
