// Js files to inject in `layout/_partial/script.ejs`
var feelingsJsFilesToInject = [
  'jquery.js',
  'jquery.fancybox.js',
  'thumbs.js',
  'feelings.js'
];

// Css files to inject in `layout/_partial/head.ejs`
var feelingsCssFilesToInject = [
  'font-awesome.css',
  'jquery.fancybox.css',
  'thumbs.css',
  'feelings.css'
];

module.exports.feelingsCssFilesToInject = feelingsCssFilesToInject.map(function(path) {
  return 'source/assets/css/' + path;
});

module.exports.feelingsJsFilesToInject = feelingsJsFilesToInject.map(function(path) {
  return 'source/assets/js/' + path;
});
