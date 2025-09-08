import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.css';
import { useEffect } from 'react';
import { marked } from 'marked';
import sanitizeInput from './../utils/sanitize';

/**
 * Previewer component - Component for displaying the markdown
 * @component
 * @module components/Previewer
 * @param {Object} props - Component props
 * @param {string} props.title - Previewer title displayed in the toolbar
 * @param {string} props.text - Current markdown text from the textarea in the Editor
 * @description The first useEffect configures the marked() method
 * If the language is specified, it uses hljs.highlight() to optimize performance.
 * If not, it uses hljs.highlightAuto().
 * The second useEffect ensures that all the code in the Previewer is highlighted when text is updated.
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
      <div className="previewer-body" dangerouslySetInnerHTML={{__html: sanitizeInput(text)}}>
      </div>
    </div>
  )
}

export default Previewer;
