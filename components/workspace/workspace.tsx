"use client"
import Split from 'react-split'
import React from 'react';
import ProblemDesc from './problemDesc/problemDesc';
import CodeEditor from './codeEditor/codeEditor';

const Workspace = () => {
  return (
    <Split className="split-row" minSize={0}>
      <div className='h-lvh overflow-y-auto'><ProblemDesc /></div>
      <CodeEditor />
    </Split>
  );
};

export default Workspace;