module.exports = function (grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'themes/css/test.css': ['themes/stylus/swatches/*.styl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['stylus']);
};
