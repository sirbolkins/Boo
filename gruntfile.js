module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: 'src/**',
      tasks: ['dev']
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/scss/',
          src: ['*.scss'],
          dest: 'build/assets/css/',
          ext: '.css'
        },
        {
          expand: true,
          cwd: 'src/assets/scss/',
          src: ['*.scss'],
          dest: 'dev/themes/boo/assets/css/',
          ext: '.css'
        }]
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: 'true',
            cwd: 'src/',
            src: ['assets/fonts/*', 'assets/js/*', 'partials/*'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['*'],
            filter: 'isFile',
            dest: 'build/'
          }
        ]
      },
      dev: {
        files: [
          {
            expand: 'true',
            cwd: 'src/',
            src: ['assets/fonts/*', 'assets/js/*', 'partials/*'],
            dest: 'dev/themes/boo/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['*'],
            filter: 'isFile',
            dest: 'dev/themes/boo/'
          }
        ]
      }
    },
    run: {
      //open new terminal instance, get to project dir and run node index.js
    },
    compress: {
      main: {
        options: {
          archive: 'build_min/boo_theme.zip'
        },
        files: [
          {expand: true, cwd: 'build/', src: ['**']},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('build', ['copy', 'sass', 'compress']);
  grunt.registerTask('default', ['build', 'jshint']);
  grunt.registerTask('dev', ['default', 'watch']);

};