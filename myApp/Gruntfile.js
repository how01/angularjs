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
				files: [{
					src: ['public/app.css', 'public/custom_modules/**/*.css','public/signin/*.css'],
					dest: 'public/app-all.css'
				}],
				options: {
					sourcemap: 'true'
				}
			}
		},
		watch: {
			scripts: {
				files: ['public/app.css', 'public/custom_modules/**/*.css','public/signin/*.css'],
				tasks: ['concat']
			}
		},
		nodemon: {
			dev: {
				script: './bin/startServer',
				options: {
					args: ['dev'],
					callback: function(nodemon) {
						nodemon.on('log', function(event) {
							//console.log(event.colour);
						});
					},
					env: {
						PORT: '9080'
					},
					cwd: __dirname,
					ignore: ['node_modules/**'],
					ext: 'js,coffee',
					watch: ['server'],
					delay: 1000,
					legacyWatch: true
				}
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'concat', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	// Default task.
	grunt.registerTask('default', ['concurrent:dev']);
};