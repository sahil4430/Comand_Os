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
// searchFile.js
// searchFile.js

export function searchFileByName(name) {
  return new Promise((resolve, reject) => {
    const results = [];
    const find = spawn('find', [
      '/Users',
      '/Applications',
      '/Volumes',
      '-type', 'f',
      '-iname', `*${name}*`
    ]);

    find.stdout.on('data', (data) => {
      const lines = data.toString().split('\n').filter(line => line.trim());
      results.push(...lines);
    });

    find.stderr.on('data', (data) => {
      const msg = data.toString();
      if (!msg.includes('Permission denied')) {
        console.error(`Error: ${msg}`);
      }
    });

    find.on('close', () => {
      resolve(results);
    });

    setTimeout(() => {
      find.kill();
      reject(new Error('Search timed out'));
    }, 30000);
  });
}
const testFileName = 'web/comand_os'; 

searchFileByName(testFileName)
  .then((files) => {
    console.log(`✅ Found ${files.length} files:`);
    files.forEach((file, index) => {
      console.log(`${index + 1}: ${file}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error during search:', err.message);
  });
