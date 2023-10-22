// Import Purgecss
const Purgecss = require('purgecss');

module.exports = {
  // Specify the content you want to analyze (e.g., HTML files).
  // Replace 'content' with an array of file paths you want to analyze.
  // For example, if you want to analyze your HTML files in the 'dist' folder:
  content: ['./dist/**/*.html'],

  // Specify the CSS files you want to analyze.
  // Replace 'css' with an array of CSS file paths you want to analyze.
  // For example, if you have a CSS file in the 'dist' folder:
  css: ['./dist/css/styles.css'],

  // Define the safelist of classes you want to keep.
  safelist: ['gallery', 'container', 'py-3', 'gallery-items-row', 'row', 'item-column', 'mb-4', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4'
  ,'modal', 'fade','show','modal-dialog','modal-content','modal-body','mg-prev','lightboxImage','img-fluid','mg-next','modal.show'
],

  // Other PurgeCSS configuration options can be added here.
  // For example, you can configure additional extractors, whitelist patterns, etc.
};
