// const os =  require('os'); 
// const spawn = require('child_process').spawn;

// const volume  = spawn ('osascript',['-e', 'set volume output volume 50'])
// volume.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// volume.on('close', (code) => {
//   console.log(`Volume command exited with code ${code}`);
// });
 const os = require('os');
    const spawn = require('child_process').spawn;
function setVolume(level){
  if(level<0  || level >100){
    document.write( "volume must be between 0 to 100");
  }
  const volume  = spawn ('osascript',['-e', `set volume output ${level}`])
}
 module.exports = setVolume; 

    