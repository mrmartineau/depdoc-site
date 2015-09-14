module.exports.tasks = {

	/**
	 * Browserify
	 * https://github.com/jmreidy/grunt-browserify
	 * Grunt task for node-browserify – allows CommonJS-style JS code and packages it for use in the browser
	 */
	browserify: {
		main: {
			src: ['<%=config.js.srcFile%>'],
			dest: '<%=config.js.distDir%><%=config.js.distFile%>',
			options: {
				browserifyOptions: {
					debug: true,
					fullPaths: false
				},
				plugin: [
					['minifyify', {
						output: '<%=config.js.distDir%>script.map',
						map: 'script.map'
					}]
				],
				watch: true
			}
		}
	}
};
