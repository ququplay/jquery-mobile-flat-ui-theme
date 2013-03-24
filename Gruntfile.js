module.exports = function (grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'themes/css/swatches.css': ['themes/stylus/swatches/*.styl']
        }
      }
    },
    watch: {
      stylus: {
        files: ['themes/stylus/**/*.styl'],
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
