module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      css: {
        src: ['src/css/fonts.css',
              'src/css/swatches.css',
              'src/css/global.css',
              'src/css/jqm.structure.css'],
        dest: 'generated/jquery.mobile.flatui.css'
      }
    },
    stylus: {
      compile: {
        files: {
          'src/css/swatches.css': ['src/stylus/swatches/*.styl']
        }
      }
    },
    copy: {
      main: {
        files: [
          { src: 'generated/jquery.mobile.flatui.css', dest: 'demo/css/jquery.mobile.flatui.css' },
          { expand: true, src: ['images/**'], cwd: 'src/css/', dest: 'demo/css/' },
          { expand: true, src: ['images/**'], cwd: 'src/css/', dest: 'generated/' },
          { expand: true, src: ['fonts/**'], cwd: 'src/css/', dest: 'demo/css/' },
          { expand: true, src: ['fonts/**'], cwd: 'src/css/', dest: 'generated/' }
        ]
      }
    },
    cssmin: {
      compress: {
        files: {
          'generated/jquery.mobile.flatui.min.css': 'generated/jquery.mobile.flatui.css'
        }
      }
    },
    watch: {
      stylus: {
        files: ['src/stylus/**/*.styl'],
        tasks: ['stylus', 'concat', 'copy', 'cssmin']
      },
      css: {
        files: ['src/css/global.css', 'src/css/fonts.css', 'src/css/jqm.structure.css'],
        tasks: ['concat', 'copy', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['stylus', 'concat', 'copy', 'cssmin']);
};
