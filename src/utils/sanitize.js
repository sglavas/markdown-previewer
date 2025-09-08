/**
 * DOMPurify Utilities for Markdown Previewer
 * @module utils/sanitize
 * @description Sanitizes the input from the Editor
*/

import DOMPurify from 'dompurify';
import { marked } from 'marked';


 /**
  * Sanitizes input using DOMPurify
  * @function sanitizeInput
  * @param {string} input - The markdown from the Editor
  * @return {string} Sanitized markdown
  */
 const sanitizeInput = input => {
     // Parses the input using marked
     const markedProcessed = marked(input);
     // Custom DOMPurify Configuration
     const config = {
        // Specify allowed HTML tags
        ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'em', 'strong', 
                       'code', 'pre', 'blockquote', 'ul', 'ol', 'li', 'a', 'table', 
                       'thead', 'tbody', 'tr', 'th', 'td', 'span', 'br', 'hr'],
        // If input contains forbidden HTML tags, such as <script>, removes only the forbidden elements
        KEEP_CONTENT: true,
        // Specify allowed HTML attributes
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id',
                     'colspan', 'rowspan', 'aria-label', 'role'],
        // Forbid data-* attributes
        ALLOW_DATA_ATTR: false
    };
     // Return string sanitized according to the custom configuration
     const clean = DOMPurify.sanitize(markedProcessed, config);
     // Force safe link to prevent tabnabbing attack
     return clean.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
  };

  export default sanitizeInput;
