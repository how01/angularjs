module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
        

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        concat: {
            dist: {
                files: [
                  { src: ['app.css','custom_modules/**/*.css'], dest: 'app-all.css'}
                ],
                options: {sourcemap: 'true'}
            }
        },
        watch: {
            scripts: {
                files: ['app.css','custom_modules/**/*.css'],
                tasks: ['concat']
            }
        },
        nodemon: {
              dev: {
                script: 'index.js',
                options: {
                  args: ['dev'],
                  callback: function (nodemon) {
                    nodemon.on('log', function (event) {
                      console.log(event.colour);
                    });
                  },
                  env: {
                    PORT: '3000'
                  },
                  cwd: __dirname,
                  ignore: ['node_modules/**'],
                  ext: 'js,coffee',
                  watch: ['server'],
                  delay: 1000,
                  legacyWatch: true
                }
              },
              exec: {
                options: {
                  exec: 'less'
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat','watch']);
};