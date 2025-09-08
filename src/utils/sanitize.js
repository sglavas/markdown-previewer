import DOMPurify from 'dompurify';
import { marked } from 'marked';


 const sanitizeInput = input => {
     const markedProcessed = marked(input);
     const config = {
        ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'em', 'strong', 
                       'code', 'pre', 'blockquote', 'ul', 'ol', 'li', 'a', 'table', 
                       'thead', 'tbody', 'tr', 'th', 'td', 'span', 'br', 'hr', 'img'],
        KEEP_CONTENT: true,
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id', 'src', 'alt', 'title',
                     'colspan', 'rowspan', 'width', 'height', 'aria-label', 'role'],
        ALLOW_DATA_ATTR: false
    };
     return DOMPurify.sanitize(markedProcessed, config);
  };

  export default sanitizeInput;
