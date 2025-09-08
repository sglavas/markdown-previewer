import { initialMarkdown } from './../App.js';

/**
 * Editor component - Component for editing the markdown
 * @component
 * @module components/Editor
 * @param {Object} props - Component props
 * @param {string} props.title - Current markdown text content in the textarea
 * @param {string} props.text - Editor title displayed in the toolbar
 * @param {Function} props.setText - useState setter function to update the text state
 * @description Contains the toolbar with the full-screen button and the textarea input for editing.
*/
function Editor ({title, text, setText}) {
  /**
   * Hande the change event from the textarea input
   * @function handleChange
   * @param {Event} event - The change event object
   * @listens module:components/Editor~Editor#onChange
   * 
  */
  function handleChange(event) {
    // Editor textarea
    let textInput = document.getElementById("editor");
    // Check if there are more than 10 000 characters in the editor
    if(textInput.value.length > 10000){
      // Display alert
      alert("Too many characters in the Editor")
      // Set text to initialMarkdown
      setText(initialMarkdown);
      return;
    }

    // Check if input is larger than 10 000 characters
    if(event.target.value.length > 10000){
      // Display alert
      alert("Markdown too large.")
      // Change input to empty string
      event.target.value = "";
      return;
    }
    setText(event.target.value);
  }
  
  return(
    <div className="editor-wrapper" id="editor-wrapper">
    {/* Editor toolbar */}
    <div className="toolbar d-flex flex-row justify-content-between">
      {title}
    </div>
      {/* The textarea input of the Editor component */}
      <textarea id="editor"
                onChange={handleChange}
                value={text} />
  </div>
  )
}

export default Editor;
