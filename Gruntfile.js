module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

    sass: {
      drp_scss: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.scss'],
          dest: './dist/css',
          ext: '.css'
        }]
      },
    },

    cssmin: {
      drp_css: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/daterangepicker.min.js': ['daterangepicker.js', 'moment.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};
