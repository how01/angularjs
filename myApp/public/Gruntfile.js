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
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat','watch']);
};