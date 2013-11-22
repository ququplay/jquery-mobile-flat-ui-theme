module.exports = function (grunt) {

  var cssFiles =  [
    'src/css/jquery.mobile.internal-png.css',
    'src/css/jquery.mobile.structure.css',
    'src/css/jquery.mobile.structure.custom.css',
    'src/css/jquery.mobile.theme.css',
    'src/css/swatches.css',
    'src/css/fonts.css'
  ];

  grunt.initConfig({
    concat: {
      css: {
        src: cssFiles,
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
        files: cssFiles,
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
