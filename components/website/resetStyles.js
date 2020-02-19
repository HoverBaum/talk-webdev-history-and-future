import { css } from '@emotion/core'

const resetStyles = css`
  /*
   Comprehensive Base Stylesheet - https://fvsch.com/base-stylesheet/
   Makes browser default styles more consistent, creating a canvas that you
   should modify for your project. Fully commented. Last update: 2011-10-02.
*/

  /* CONTAINERS */
  & {
    line-height: 1;
    color: black;
    font-family: serif;
    font-size: 1rem;
    background-color: white;
  }
  /* HTML5 blocks - needed in older browsers */
  & article,
  & aside,
  & figcaption,
  & figure,
  & footer,
  & header,
  & nav,
  & section {
    display: block;
  }

  /* PARAGRAPHS */
  & h1,
  & h2,
  & h3,
  & h4 {
    margin: 1rem 0 0.5rem; /* Titles should be close to the text they describe */
    line-height: 1.25; /* Bigger text is often nicer with smaller line height */
    font-weight: bold;
  }
  & h1 {
    font-size: 2rem;
  }
  & h2 {
    font-size: 1.5rem;
  }
  & h3 {
    font-size: 1.2rem;
  }
  & h4 {
    font-size: 1rem;
  }
  & ul,
  & ol {
    margin: 1rem 0; /* Default for all browsers except IE */
    padding-left: 40px; /* IE has a 40px margin-left instead */
  }
  & p {
    margin: 1rem 0;
  }
  & blockquote {
    margin: 1rem 40px; /* Same for all browsers - Customize or rremove */
  }
  & figure {
    margin: 1rem 0;
  }

  /* LINKS */
  /* Default browser styles (from Firefox, similar in most browsers) */
  & a {
    text-decoration: underline;
  }
  & a:link {
    color: #0000ee;
  }
  & a:visited {
    color: #551a8b;
  }
  & a:active {
    color: #ee0000;
  }
  /* Add your own styles for hover _and_ focus styles */
  & a:hover,
  & a:focus {
    /* ... */
  }
  /* Remove dotted outline clicked links - Keeps outline on focus */
  & a:active,
  & a:hover {
    outline: none;
  }
  /* No border around images in links */
  & a img {
    border: none;
  }

  /* MISC TEXT-LEVEL ELEMENTS */
  /* Make quotations and references more visible */
  & q,
  & cite {
    font-style: italic;
  }

  & q:before,
  & q:after {
    content: '';
  }
  /* Stopping superscript and subscript from adding to the line's leading */
  & sup,
  & sub {
    line-height: 0;
  }

  /* FORMS */
  & fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }
  & input,
  & button,
  & select {
    vertical-align: middle; /* Helps keep form elements roughly aligned */
  }

  /* TABLES */
  & table {
    border-collapse: collapse; /* Merges cell borders together */
    /* Browser default: border-collapse: separate; border-spacing: 2px; */
  }
  & td,
  & th {
    padding: 1px; /* Same as browser default - set to "0" to remove padding */
    vertical-align: top; /* Default is "middle" */
    text-align: left; /* Default for TH elements is "center" */
  }
  & td:first-child,
  & th:first-child {
    empty-cells: hide; /* Hide empty cells when they're the first in the row */
  }
`

export default resetStyles
