// const { spawn } = require('node:child_process');
const spawn = require('node:child_process').spawn;

// code to get list of files in /usr directory
// using spawn method of child_process module

const ls = spawn( 'ls', ['-lh', '/Users/sahilpanwar/Development/web/comand_os/childProcess']);
ls.stdout.on('data',(data)=>{
    console.log(`stdout in kb:${data}`)
});

ls.stderr.on('data' , (data)=>{
    console.log(`stderr:${data}`);
})

ls.on('close',(code)=>{
    console.log(`child process exited with code ${code}`);
});


// code to get list of processes running on the system
// const ps = spawn('ps',['ax']);
// const grep = spawn('grep',['ssh']);

// ps.stdout.on('data',(data)=>{
//     grep.stdin.write(data);
// });
//  ps.stderr.on('data',(data)=>{
//     Console.log(`ps stderr: ${data}`);
//  })

//  ps.on('close',(code)=>{
//     if(code !==0){
//         console.log(`ps process exited with code ${code}`)
    
//     }
//     grep.stdin.end();
//  });

//  grep.stdout.on('data',(data)=>{
//     console.log(data.toString());

//  });

//  grep.stderr.on('data',(data)=>{
//     console.log(`error:${data}`);
//  });

//  grep.on('close',(code)=>{
//     if(code!==0){
//         console.log(`grep process exited with code ${code}`);
//     }
//  })


