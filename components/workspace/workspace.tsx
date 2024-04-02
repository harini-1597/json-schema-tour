"use client"
import React from 'react';
import ProblemDesc from './problemDesc/problemDesc';
import CodeMirror from '@uiw/react-codemirror';
import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';
import { json } from '@codemirror/lang-json';
import EditorFooter from '../editorFooter/editorFooter';


const Workspace = () => {
  return (
      <div className="flex h-screen">
        <div className="w-1/2 overflow-y-auto "><ProblemDesc /></div>
        <div className="w-1/2 flex flex-col">
          <div className="flex bg-lilac">
          <CodeMirror value="{}" theme={noctisLilac} extensions={[json()]} style={{fontSize:16}} />
          </div>
          <div className="w-full px-5 overflow-auto bg-white">
            <div className='flex h-10 items-center space-x-6'>
              <div className='text-l font-medium leading-5 text-black'>Validity</div>
            </div>
          </div>
        <EditorFooter />
        </div>
      </div>
  );
};

export default Workspace;