import React from 'react'
import CodeTopbar from './codeTopbar';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { abyss } from '@uiw/codemirror-theme-abyss';
import { json } from '@codemirror/lang-json';
import EditorFooter from '../../editorFooter/editorFooter';

type Props = {}

function CodeEditor({}: Props) {
  return (
    <div className=''> {/* flex flex-col relative w-full h-screen */}
    <CodeTopbar />
    <Split className='split-column h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60}>
        <div className='w-full overflow-auto bg-abyss'>
        <div className="flex flex-col">
            <CodeMirror value="{}" theme={abyss} extensions={[json()]} style={{fontSize:16}} />
        </div>
        </div>
        <div><EditorFooter /></div>
    </Split>
    </div>
  )
}

export default CodeEditor;