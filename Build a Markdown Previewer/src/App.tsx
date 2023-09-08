import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'


const defaultMarkDown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`


const getpreviewWindowSize = (): string => {
  return `maximized`;
};


function App() {
  const [markdownText, setMarkDownText] = useState<string>(defaultMarkDown)
  const [previewWindowSize, setpreviewWindowSize] = useState<string>(getpreviewWindowSize)


  const maximizeWindow = () => {

    setpreviewWindowSize(getpreviewWindowSize());

  };
  return (
   
      <div id="app">
        
        <div>
          <div className={"editorWrap" + previewWindowSize}  >

            <div className="toolbar">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            "Editor"
            <i className="fa fa-arrows-alt" onClick={maximizeWindow}></i>
            </div>

            <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkDownText(e.target.value)}></textarea>


          </div>

          <div className="converter"></div>

          <div className="previewWrap">

          <div className="toolbar">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            "Previewer"
            <i className="fa fa-arrows-alt"></i>

            </div>

            <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>

            </div>

          </div>

          
        </div>
      </div>

  )
}

export default App
