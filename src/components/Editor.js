/**
 * Editor component - Component for editing the markdown
 * @component
 * @module components/Editor
 * @param {Object} props - Component props
 * @param {string} props.text - Editor title displayed in the toolbar
 * @param {string} props.title - Current markdown text content in the textarea
 * @param {Function} propst.setText - useState setter function to update the text state
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
  setText(event.target.value);
  }

  /**
   * Display the Editor in full screen on click
   * @function handleClick
   * @param 
   * @listens
   * 
  */
  function handleClick() {
    document.getElementById("editor-wrapper").requestFullscreen();
  }
  
  return(
    <div className="editor-wrapper" id="editor-wrapper">
    {/* Editor toolbar */}
    <div className="toolbar d-flex flex-row justify-content-between">
      {title}
      {/* Full-screen button */}
      <button className='btn btn-secondary btn-sm' onClick={handleClick}>
        {/* Bootstrap icon - full screen */}
        <i className='bi bi-arrows-fullscreen'></i>
      </button>
    </div>
      {/* The textarea input of the Editor component */}
      <textarea id="editor"
                onChange={handleChange}
                value={text} />
  </div>
  )
}

export default Editor;
