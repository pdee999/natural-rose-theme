module.exports = function(grunt) {

    var webpackConfig = require("./webpack.config.js");

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webpack: {
            options: webpackConfig,
            dist: {
                // configuration for this build
            }
        },

        "webpack-dev-server": {
            options: {
                webpack: {
                    // configuration for all builds
                },
                // server and middleware options for all builds
            },
            start: {
                webpack: {
                    // configuration for this build
                },
                // server and middleware options for this build
            }
        },

        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: {  // Dictionary of files
                    'css/styles-compiled.css': 'sass/styles.scss' // 'destination': 'source'
                }
            }
        },

        csssplit: {
            dist: {
                src: ['css/styles-compiled.css'],
                dest: 'css/parts/styles.css',
                options: {
                    maxSelectors: 4095,
                    maxPages: 3, //Ensure there are enough pages for all of your CSS
                    suffix: '-page'
                }
            },
        },

        "file-creator": {
            options: {
                openFlags: 'w'
            },
            "folder": {
                "css/styles.css": function(fs, fd, done) {
                    var glob = grunt.file.glob;
                    var _ = grunt.util._;
                    glob('css/parts/*.css', function (err, files) {
                        var widgets = [];
                        _.each(files, function(file) {
                            widgets.push(file);
                        });
                        fs.writeSync(fd, '/* This file is auto-generated.  DO NOT MODIFY */ \n');
                        _.each(widgets, function(file, i) {
                            fs.writeSync(fd, '@import url("parts/' + file.split('/')[2] + '");' + '\n');
                        });
                        done();
                    });
                }
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'css/parts/' // ...to the specified directory
                },
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer-core')({browsers: 'last 3 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                    ]
                },
            dist: {
              src: 'css/*.css'
            }
        },

        // jshint: {
        //     options: {
        //         globals: {
        //             jQuery: true,
        //             console: true,
        //             module: true,
        //             document: true
        //         },
        //         ignores: [
        //             'js/*.min.js',      //ignore minified js
        //             'js/*.min.js.map'   //ignore js source maps
        //         ],
        //         reporter: require('jshint-stylish')
        //     },
        //     dist: [//targeting the pre uglified files
        //         'Gruntfile.js',
        //         'js/**/*.js'
        //     ]
        // },
        //
        // uglify: {
        //     options: {
        //         sourceMap : true,
        //         banner: '/*\n' + // 6
        //         ' * ' + '<%= pkg.name %>\n' + // 7
        //         ' * ' + 'v<%= pkg.version %>\n' + // 8
        //         ' * ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + // 9
        //         ' **/\n'
        //     },
        //     dist: {
        //         files: {
        //             'js/core.min.js': [
        //                 'js/core.js',
        //                 'js/parts/**/*.js'
        //             ]
        //         }
        //     }
        // },

        // imagemin: { // Task
        //     dynamic: { // Target
        //         options: { // Target options
        //             optimizationLevel: 1,
        //             svgoPlugins: [
        //                 { removeViewBox: false },               // don't remove the viewbox atribute from the SVG
        //                 { removeUselessStrokeAndFill: false },  // don't remove Useless Strokes and Fills
        //                 { removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
        //             ]
        //         },
        //         files: [{
        //             expand: true,                       // Enable dynamic expansion
        //             cwd: 'img/',                        // Src matches are relative to this path
        //             src: ['**/*.{png,jpg,gif,svg}'],    // Actual patterns to match
        //             dest: 'img/'                        // Destination path prefix
        //         }]
        //     }
        // }, 

        bowercopy: {
            jquery: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'jquery/dist'
            },
            jquerymigrate: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'jquery-migrate/*.js'
            },
            modernizr: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'modernizr/modernizr.js'
            },
            normalize: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                files: {
                    'normalize.scss/sass': 'normalize.scss/sass',
                    'normalize.scss/sass/_support-for.scss': 'support-for/sass/_support-for.scss'
                }
            },
            gridle: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                files: {
                    'gridle/sass': 'gridle/sass',
                    'gridle/js/gridle-eq.js': 'gridle/js/gridle-eq.js',
                    'gridle/js/gridle-eq.js.map': 'gridle/js/gridle-eq.js.map',
                    'gridle/js/gridle-full.min.js': 'gridle/js/gridle-full.min.js',
                    'gridle/js/gridle.eq.min.js': 'gridle/js/gridle.eq.min.js',
                    'gridle/js/gridle.js': 'gridle/js/gridle.js',
                    'gridle/js/gridle.js.map': 'gridle/js/gridle.js.map',
                    'gridle/js/gridle.min.js': 'gridle/js/gridle.min.js'
                }
            },
            waypoints: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'waypoints/lib/'
            },
            slick: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'slick-carousel/slick/'
            },
            parallax: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                files: {
                    'parallax.js/parallax.js': 'parallax.js/parallax.js',
                    'parallax.js/parallax.min.js': 'parallax.js/parallax.min.js'
                }
            },
            jspdf: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'jspdf/dist/'
            },
            /* jqueryui: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                files: {
                    'jquery-ui/jquery-ui.js': 'jquery-ui/jquery-ui.js',
                    'jquery-ui/jquery-ui.min.js': 'jquery-ui/jquery-ui.min.js',
                    'jquery-ui/ui': 'jquery-ui/ui',
                    'jquery-ui/themes': 'jquery-ui/themes'
                }
            },
            moment: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                files: {
                    'moment/moment.js': 'moment/moment.js',
                    'moment/locale': 'moment/locale',
                    'moment/min': 'moment/min',
                    'moment/templates': 'moment/templates'
                }
            },
            jscookie: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'js-cookie/src'
            },
            jquerysession: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'jquery-session-plugin/jquery.session.js'
            },
            bootstrap: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'bootstrap-sass/assets'
            },
            fontawesome: {
                options: {
                    runBower: true,
                    report: true,
                    clean: true,
                    destPrefix: 'libs/'
                },
                src: 'fontawesome'
            } */
        },

        watch: {
            options: {
                reload: false,
                spawn: false,
                interrupt: false,
                livereload: true
            },
            config: {
                files: [ 
                    'Gruntfile.js',
                    'package.json',
                    'bower.json',
                    '.bowerrc',
                    'webpack.config.js'
                 ],
                tasks: [
                    'default'
                ]
            },
            dist: {
                files: [
                    'js/**/*.js',
                    '!js/*.min.js',         // Don't watch minified js
                    '!js/*.min.js.map',     // Don't watch js source maps
                    'sass/**/*.scss'
                ],
                    tasks: [
                        'webpack'
                ]
            },
            // scripts: {
            //     files: [
            //         'js/**/*.js',
            //         '!js/*.min.js',         // Don't watch minified js
            //         '!js/*.min.js.map'     // Don't watch js source maps
            //     ],
            //     tasks: [
            //         'jshint',
            //         'uglify'
            //     ]
            // },
            // styles: {
            //     files: [
            //         'sass/**/*.scss'
            //     ],
            //     tasks: [
            //         'sass',
            //         'csssplit',
            //         'file-creator',
            //         'postcss'
            //     ]
            // }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-csssplit');
    grunt.loadNpmTasks('grunt-file-creator');
    grunt.loadNpmTasks('grunt-postcss');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-newer');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['bowercopy', 'sass', 'csssplit', 'file-creator', 'postcss', 'jshint', 'uglify', 'newer:imagemin']);
    // grunt.registerTask('default', ['bowercopy', 'sass', 'csssplit', 'file-creator', 'postcss', 'jshint', 'uglify']);
    grunt.registerTask('default', ['bowercopy', 'webpack', 'sass', 'csssplit', 'file-creator', 'postcss']);

};