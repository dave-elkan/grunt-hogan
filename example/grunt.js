"use strict";
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //configure a grunt-hogan task
    hogan: {
        //the "simple_default" target will just compile a 
        //template with the "default" binder
        simple_default : {
            compile : {
                templates : "./view/simple.html",
                output : "./temp/simple.js"
            }
        },
        //the "multi_revealing" target will compile multiple
        //templates into a single file
        //using the specified "revealing" binder
        //(resulting template javascript will follow the "revealing
        // module pattern")
        multi_revealing : {
            compile : {
                templates : "./view/multi*.html",
                output : "./temp/multi.js",
                options : {
                    binderName: "revealing"
                }
            }
        },
        //the "custombinder_bootstrap" target will compile
        //a new binder template (suitable for use as a binder
        //in other compiles)
        custombinder_bootstrap : {
            compile : {
                templates : "./view/custombinder.hogan",
                output : "./temp/custombinder.js",
                options : {
                    binderName: "bootstrap"
                }
            }
        },
        //the "multi_custombinder" target will compile
        //the multi templates, but use the custom
        //binder built by the "custombinder_bootstrap" target
        multi_custombinder : {
            compile : {
                templates : "./view/multi*.html",
                output : "./temp/multi.js",
                options : {
                    binderName: "./temp/custombinder.js"
                }
            }
        }
    },
      
    //The rest is from the boilerplate generated by "grunt init:node"
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'lib/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-hogan');

  // Default task.
  grunt.registerTask('default', 'lint hogan:simple_default hogan:multi_revealing hogan:custombinder_bootstrap hogan:multi_custombinder');

};