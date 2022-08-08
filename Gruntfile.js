module.exports = function (grunt) {

  grunt.initConfig({
  
      pkg: grunt.file.readJSON('package.json'),
      tslint: {
          options: {
              configuration: "tslint.json",
              force: false,
              fix: false
          },
          files: {
              src: ['app/*/.ts']
          }
      },
      ts: {
          default : {
              src: ['app/*/.ts'],
              outDir: 'outDir/app/',
              tsconfig: 'tsconfig.json'
          }
      },
  
      watch: {
          ts: {
              files: ['app/*/.ts'],
              tasks: ['tslint', 'ts']
          }
      }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-tslint');
    
  grunt.registerTask('build', ['tslint', 'ts']);
  }