'use client';

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";

// import { editSnippet } from '@/actions';
import * as actions from '@/actions';

interface SnippetEditFormProps{
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {

    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value : string="") => {
         console.log(value)
         setCode(value)
  }
  
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return (
      <div>
            <Editor
             height="40vh"
             theme="vs-dark"
             language="javascript"
             defaultValue={snippet.code}
            options={{minimap:{enabled:false}}} // Minimap is not suitable for this small application.  
            onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
          <button type="submit" className="mt-5 p-2 border rounded text-lg bg-gray-100 hover:bg-gray-300 hover:shadow-md">
            Save
          </button>
        </form>
       
      </div>
    );
}
