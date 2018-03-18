module.exports = function(grunt) {
  grunt.config.set('concat', {
    // Concat all javascript file into `feelings.js`
    devJs: {
      src: ['source/_js/**/*.js'],
      dest: 'source/assets/js/feelings.js',
      options: {
        separator: ';'
      }
    },
    // Concat all stylesheets file into `style.css`
    prodCss: {
      src: ['source/assets/css/*.css'],
      dest: 'source/assets/css/style.css'
    },
    // Concat all javascript file in `script.js`
    prodJs: {
      src: require('../pipeline').feelingsJsFilesToInject,
      dest: 'source/assets/js/script.js',
      options: {
        separator: ';'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
