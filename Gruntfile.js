module.exports = function (grunt) {

  var swatches = grunt.file.readJSON('swatches.json');

  grunt.initConfig({
    stylus: grunt.util._(swatches).reduce(function (memo, value, key) {
      var swatch = { options: {}, files: {} };
      swatch.options.define = value;
      swatch.options.define.swatch = key;
      swatch.files['themes/css/swatch-' + key + '.css'] =  ['./themes/stylus/swatch.styl']
      memo[key] = swatch;
      return memo;
    }, {})
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['stylus']);
};
