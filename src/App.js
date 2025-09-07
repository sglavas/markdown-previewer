/**
 * Root Application Component
 * @component
 * @description
 */
import './index.css';
import './App.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState, useEffect } from 'react';
import { marked } from 'marked';
import ReactDOM from "react-dom";

import Editor from './components/Editor';

// Initial markdown that is processed on load
const initialMarkdown = `
# Welcome to my React Markdown Previewer!

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


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;


//React:


/**
 * App component - Main component that contains the two other components of the app, Editor and Previewer
 * @component
 * @module components/QuoteBox
 * @description Passes the text and setText hook to the Editor, passes the text variable to the Previewer
*/
function App () {
  // Set initialMarkdown as initial state
  const [ text, setText] = useState(initialMarkdown);
 
  
  return(
    <div className="app-wrapper container-fluid">
      {/* Pass the text variable to the Editor component together with the setText hook */} 
      <Editor title="Editor" text={text} setText={setText} />
      {/* Pass the text variable to the Previewer component */}
      <Previewer title="Previewer" text={text} />
    </div>
  )
}



/**
 * App component - Main component that the two other components of the app, Editor and Previewer
 * @component
 * @module components/QuoteBox
 * @description Passes the text and setText hook to Editor, and it passes the text variable to the Previewer
*/
function Previewer ({title, text}) {

  /**
   * useEffect: Configure marked settings
   * @effect
   * @description Sets the highlight option that takes lang and code parameters
   */
  useEffect(() => {
  // Configure marked to use highlight.js
    marked.setOptions({
      gfm: true,
      breaks: true,
      // Highlight uses the code language after the backticks
      highlight: function(code, lang){
        // If supported
        if(hljs.getLanguage(lang)){
          // Returns a language definition object if it's supported
          return hljs.highlight(lang, code).value;
          // Manually highlights code using the specified language (lang)
        }
        // If not supported or not present
        return hljs.highlightAuto(code).value;
        // Automatically detects the most likely programming language from the code
      }
    });
  }, []); // Empty dependecy array = run once on mount


  /**
   * useEffect: Highlight all code
   * @effect
   * @description All markdown in the previewer is highlighted once the text is updated
   */
  useEffect(() => {
    // Highlight all code blocks in the previewer
    hljs.highlightAll();
  }, [text]); // Runs whenever the markdown text updates

  
  function handleClick() {
    document.getElementById("previewer-wrapper").requestFullscreen();
  }

  return(
    <div className="previewer-wrapper" id="previewer-wrapper">
      {/* Previewer toolbar */}
      <div className="toolbar d-flex flex-row justify-content-between">
        {title}
        {/* Full-screen button */}
        <button className='btn btn-secondary btn-sm' onClick={handleClick}>
          {/* Bootstrap icon - full screen */}
          <i className='bi bi-arrows-fullscreen'></i>
        </button>
      </div>
      {/* Previewer body */}
      <div className="previewer-body" dangerouslySetInnerHTML={{__html: marked(text)}}>
      </div>
    </div>
  )
}


export default App