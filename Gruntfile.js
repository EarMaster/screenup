module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			less: {
				files: ['**/*.less'],
				tasks: ['less:mockup']
			},
			livereload: {
				files: ['**/*.html', '**/*.css'],
				options: {
					livereload: true,
				},
			},
		},
		less: {
			mockup: {	
				options: {
					compress: true,
					sourceMap: true,
				},
				files: {
					'mockup.css': 'mockup.less'
				},
			},
		},
		connect: {
			server: {
				options: {
					open: true,
					livereload: false,
					useAvailablePort: true,
				},
			},
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			watch: ['watch:less', 'watch:livereload'],
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.registerTask('default', ['connect:server', 'concurrent:watch']);
};
