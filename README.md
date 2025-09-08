# Markdown Previewer

## Overview

A React-based Markdown Previewer that allows you to write Markdown text in an editor and instantly preview the rendered HTML. Supports GitHub-flavored Markdown (GFM), syntax highlighting for code blocks, and full-screen modes for both the editor and previewer.

---

## Features
- Real-time Preview: Instantly see your Markdown rendered as HTML as you type
- Syntax Highlighting: Code blocks are highlighted with proper syntax coloring using Highlight.js
- XSS Protection: Built-in HTML sanitization using DOMPurify to prevent cross-site scripting attacks
- Responsive Design: Works well on desktop and mobile devices
- Bootstrap Styling: Clean, modern UI with Bootstrap components
- Input Limits: Protective character limits to prevent abuse

---

## Security Implementation
This application implements multiple layers of security protection. It uses <a href="https://github.com/cure53/DOMPurify">DOMPurify</a> with a custom configuration to sanitize HTML output and prevents XSS attacks.

* Allowed Tags Whitelist: Only permits safe HTML tags necessary for Markdown rendering
* Data Attribute Blocking: Prevents data-* attributes that could be used for attacks
* Attribute Filtering: Restricts attributes to prevent malicious code execution

---

## Input Protection
- Character Limit: Prevents denial-of-service attacks with 10,000 character limit
- Input Validation: Real-time validation and automatic reset on excessive input
- Automatic reset to initial state when limit exceeded
- Tabnabbing Prevention: All external links automatically get

```html
target="_blank" rel="noopener noreferrer"
```

---

## Security Testing
The application includes protection against common XSS vectors

```HTML
<!-- These will be sanitized and made safe -->
<script>alert('XSS')</script>
<img src="x" onerror="alert(1)">
<a href="javascript:alert(1)">Click me</a>
<iframe src="javascript:alert(1)"></iframe>
```

---

## Technologies Used
- **React 18**
- **Bootstrap**
- **Marked**
- **Highlight.js**
- **DOMPurify**

---

## Project Structure

```text

.
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Editor.js
    │   └── Previewer.js
    ├── index.css
    ├── index.js
    └── utils
        └── sanitize.js

```

---

## Installation & Setup

1. Clone the repository and navigate to project directory

```bash

git clone https://github.com/sglavas/markdown-previewer.git
cd markdown-previewer

```

2. Install dependecies

```bash

npm install

```

3. Start the development server

```bash

npm start

```

4. Open http://localhost:3000 to view it in the browser

---

## Dependencies
- **react**
- **bootstrap**
- **bootstrap-icons**
- **marked**
- **highlight.js**

---

## Future Improvements
* Add line numbers in editor
* Word count and character display
* Theme switcher
* Export options (HTML, PDF, copy to clipboard)
* Add local storage to save drafts
* Add link validation
