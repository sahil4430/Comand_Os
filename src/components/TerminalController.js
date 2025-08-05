// 'use client';

// import React, { useState } from "react";
// import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

// function TerminalController() {
//   const [terminalLineData, setTerminalLineData] = useState([
//     <TerminalOutput key={0}>Welcome to the Comand OS Terminal!</TerminalOutput>,
//   ]);

//   return (
//     <div>
//       <Terminal
//         height="100vh"
//         name="Comand OS"
//         colorMode={ColorMode.Dark}
//         onInput={(terminalInput) => {
//           console.log(`New terminal input received: '${terminalInput}'`);
//           window.electronAPI.runCommand(terminalInput).then((response) => {
//             setTerminalLineData(prev => [
//               ...prev,
//               <TerminalOutput key={prev.length}>{`> ${terminalInput}`}</TerminalOutput>,
//               <TerminalOutput key={prev.length + 1}>{response}</TerminalOutput>
//             ]);
//           });
//         }}
//       >
//         {terminalLineData}
//       </Terminal>
//     </div>
//   );
// }

// export default TerminalController;
'use client';

import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';


function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>Welcome to the Comand OS Terminal!</TerminalOutput>,
  ]);

  return (
    <div>
      <Terminal
        height="100vh"
        name="Comand OS"
        colorMode={ColorMode.Dark}
        onInput={async (terminalInput) => {
          console.log(`New terminal input received: '${terminalInput}'`);
          
          try {
            // Send input to backend via IPC and get response
            const response = await window.electronAPI.runCommand(terminalInput);
            
            setTerminalLineData(prev => [
              ...prev,
              <TerminalOutput key={prev.length}>{`> ${terminalInput}`}</TerminalOutput>,
              <TerminalOutput key={prev.length + 1}>{response}</TerminalOutput>
            ]);
          } catch (error) {
            setTerminalLineData(prev => [
              ...prev,
              <TerminalOutput key={prev.length}>{`Error: ${error.message}`}</TerminalOutput>
            ]);
          }
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}

export default TerminalController;
