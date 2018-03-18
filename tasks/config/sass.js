module.exports = function(grunt) {
  grunt.config.set('sass', {
    // Compile `feelings.scss` file into `feelings.css`
    dev: {
      options: {
        sourceMap: false
      },
      files: {
        'source/assets/css/feelings.css': 'source/_css/feelings.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
