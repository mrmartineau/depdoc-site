module.exports.tasks = {

	/**
	 * Clean
	 * https://github.com/gruntjs/grunt-contrib-clean
	 * Clean some files
	 */
	clean: {
		icons   : ['<%=config.distDir%>/img/icons', '<%=config.tempDir%>/icons'],
		tempCSS : ['<%=config.tempDir%>/css']
	},


	/**
	 * Copy files
	 * https://github.com/gruntjs/grunt-contrib-copy
	 */
	copy: {
		fonts: {
			expand: true,
			cwd: '<%=config.srcDir%>/fonts',
			src: ['*.woff'],
			dest: '<%=config.distDir%>/css/fonts'
		}
	}
};
