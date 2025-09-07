/**
 * Root Application Component
 * @component
 * @description
 */
import './index.css';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from 'react';
import ReactDOM from "react-dom";

import Editor from './components/Editor';
import Previewer from './components/Previewer';

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



export default App