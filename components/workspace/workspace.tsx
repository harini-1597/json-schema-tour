"use client"
import Split from 'react-split'
import React from 'react';
import ProblemDesc from './problemDesc/problemDesc';
import EditorFooter from '../editorFooter/editorFooter';
import CodeEditor from './codeEditor/codeEditor';

const Workspace = () => {
  return (
    <Split className="split-row" minSize={0}>
      <div className='h-lvh overflow-y-auto'><ProblemDesc /></div>
      <CodeEditor />
    </Split>
      // <div className="flex h-screen">
      //   <div className="w-1/2 overflow-y-auto "><ProblemDesc /></div>
      //   <div className="w-1/2 flex flex-col">
      //     <div className="flex bg-lilac">
      //     <CodeMirror value="{}" theme={noctisLilac} extensions={[json()]} style={{fontSize:16}} />
      //     </div>
      //     <div className="w-full px-5 overflow-auto bg-white">
      //       <div className='flex h-10 items-center space-x-6'>
      //         <div className='text-l font-medium leading-5 text-black'>Validity</div>
      //       </div>
      //     </div>
      //   <EditorFooter />
      //   </div>
      // </div>
  );
};

export default Workspace;