module.exports = function (grunt) {
	'use strict';

	var opn = require('opn');

	var options = {
		pkg: require('./package'), // <%=pkg.name%>

		// Global Grunt vars. Edit this file to change vars
		config : require('./_grunt-configs/config.js')
	};

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt, {pattern: ["grunt-*", "chotto"]});

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);


	/**
	 * Available tasks:
	 * grunt            : Alias for 'serve' task, below (the default task)
	 * grunt serve      : watch js, images & scss and run a local server
	 * grunt start      : Opens the post-install setup checklist on the Kickoff site
	 * grunt watch      : run sass:kickoff, uglify and livereload
	 * grunt dev        : run uglify, sass:kickoff & autoprefixer:kickoff
	 * grunt deploy     : run jshint, uglify, sass:kickoff and csso
	 * grunt styleguide : watch js & scss, run a local server for editing the styleguide
	 * grunt images     : compress all non-grunticon images & then run `grunt icons`
	 * grunt icons      : generate the icons. uses svgmin and grunticon
	 * grunt checks     : run jshint, scsslint and html validator
	 * grunt travis     : used by travis ci only
	 */


	/**
	 * GRUNT * Alias for 'serve' task, below
	 */
	grunt.registerTask('default', ['serve']);


	/**
	 * GRUNT SERVE * A task for a static server with a watch
	 * run browserSync and watch
	 */
	grunt.registerTask('serve', [
		'browserify:main',
		'compileCSS',
		'clean:tempCSS',
		'browserSync:serve',
		'watch'
	]);

	/**
	 * GRUNT WATCHER * A task for a static server with a watch
	 * run browserSync and watch
	 */
	grunt.registerTask('watcher', [
		'copy',
		'browserify:main',
		'compileCSS',
		'clean:tempCSS',
		'watch'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run uglify, sass:kickoff & autoprefixer:kickoff
	 */
	grunt.registerTask('dev', [
		'browserify:main',
		'compileCSS',
		'clean:tempCSS',
		'images'
	]);


	/**
	 * GRUNT DEPLOY * A task for your production environment
	 * run uglify, sass, autoprefixer and csso
	 */
	grunt.registerTask('deploy', [
		'browserify:main',
		'compileCSS',
		'csso',
		'clean:tempCSS',
		'images'
	]);


	/**
	 * Travis CI to test build
	 */
	grunt.registerTask('travis', [
		'jshint:project',
		'uglify',
		'sass:kickoff'
	]);

	// Compile CSS
	grunt.registerTask('compileCSS', [
		'sass',
		'autoprefixer'
	]);
};
