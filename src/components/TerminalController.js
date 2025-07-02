'use client';

import React, { useState } from "react";

import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>Welcome to the Comand Os Terminal !</TerminalOutput>,
  ]);

  return (<>
   
     {/* <div className="flex min-h-screen flex-col items-center text-blue-400 justify-between mx-100 p-24">
     hello world</div> */}
    <>
      <Terminal
      height="100vh"
        name="Comand OS"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          console.log(`New terminal input received: '${terminalInput}'`);

          setTerminalLineData(prev => [
            ...prev,
            <TerminalOutput key={prev.length}>{`> ${terminalInput}`}</TerminalOutput>,
          ]);
        }}
      >
        {terminalLineData}
      </Terminal>
    </>
    </>
  );
}

export default TerminalController;
