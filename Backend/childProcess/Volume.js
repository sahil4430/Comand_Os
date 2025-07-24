import {spawn } from 'child_process';

const volume  = spawn ('osascript',['-e', 'set volume output volume 50'])
volume.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

volume.on('close', (code) => {
  console.log(`Volume command exited with code ${code}`);
});