"use client"
import Split from 'react-split'
import React from 'react';
import CodeEditor from './codeEditor/codeEditor';
import ProblemDescCSD from './problemDesc/problemDescCSD';

const WorkspacePage1 = () => {
  return (
    <Split className="split-row" minSize={0}>
      <div className='h-lvh overflow-y-auto'><ProblemDescCSD /></div>
      <CodeEditor />
    </Split>
  );
};

export default WorkspacePage1;