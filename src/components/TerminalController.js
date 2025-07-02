'use client';

import React, { useState } from "react";

import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>Welcome to the Comand Os Terminal !</TerminalOutput>,
  ]);

  return (
    <div>
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
    </div>
  );
}

export default TerminalController;
