'use strict';

const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const clean = require('postcss-clean');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');
const header = require('gulp-header');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const notify = require('gulp-notify');
const order = require('gulp-order');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const postcss = require('gulp-postcss');
const prettify = require('gulp-prettify');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const scsslint = require('gulp-scss-lint');
const sorting = require('postcss-sorting');
const uglify = require('gulp-uglify');
const paths = {
    root : './src',
    html: {
				src: './src/**/*.ejs',
				srcinc: './src/inc/*.ejs',
        dest: './dest/',
    },
    styles: {
        src: './src/sass/**/*.scss',
        dest: './dest/css/',
        map: './dest/css/maps',
    },
    scripts: {
        src: './src/js/**/*.js',
        jsx: './src/js/**/*.js',
        dest: './dest/js',
        map: './dest/js/maps',
        core: 'src/js/core/**/*.js',
        app: 'src/js/app/**/*.js',
    },
    images: {
        src: './src/img/**/*.{jpg,jpeg,png,svg,git}',
        dest: './dest/img',
    },
};

// post css
const autoprefixerOption = {
    grid: true,
};
const sortingOptions = require('./postcss-sorting.json');
const postcssOption = [
    assets({
        baseUrl: '/',
        basePath: 'src/',
        loadPaths: ['img/'],
        cachebuster: true,
    }),
    flexBugsFixes,
    autoprefixer(autoprefixerOption),
    sorting(sortingOptions),
];

// optimize html
function html() {
	return gulp
		.src([paths.html.src, '!' + paths.html.srcinc], { since: gulp.lastRun(html) })
		.pipe(ejs({}, {}, {ext: '.html'}))
		.pipe(rename({extname: '.html'}))
		.pipe(
			prettify({
				indent_char: ' ',
				indent_size: 2,
				unformatted: ['a', 'span', 'br'],
			}),
		)
		.pipe(gulp.dest(paths.html.dest));
}

// compile sass without zip
function styles() {
	return gulp
		.src(paths.styles.src, { sourcemaps: true })
		.pipe(
			plumber({
				errorHandler: notify.onError('<%= error.messaage %>'),
			}),
		)
		.pipe(
			sass({
				outputStyle: 'expanded',
				includePaths: ['node_modules']
			}),
		)
		.pipe(replace(/@charset "UTF-8";/g, ''))
		.pipe(header('@charset "UTF-8";\n\n'))
		.pipe(postcss(postcssOption))
		.pipe(gulp.dest(paths.styles.dest, { sourcemaps: './maps' }));
}

// compile sass with zip
function sassCompress() {
	return gulp
		.src(paths.styles.src)
		.pipe(
			plumber({
				errorHandler: notify.onError('<%= error.message %>'),
			}),
		)
		.pipe(replace(/@charset "UTF-8";/g, ''))
		.pipe(header('@charset "UTF-8";\n\n'))
		.pipe(postcss(postcssOption, [clean()]))
		.pipe(gulp.dest(paths.styles.dest));
}

// compile js
function scripts() {
	return gulp
		.src(paths.scripts.src, { sourcemaps: true })
		.pipe(order([paths.scripts.core, paths.scripts.app], { base: './'}))
		.pipe(
			babel({
				presets: ['@babel/env'],
			}),
		)
		.pipe(plumber())
		.pipe(concat('lib.js'))
		.pipe(uglify())
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(gulp.dest(paths.scripts.dest, { sourcemaps: './maps' }));
}

// optimize image
const imageminOption = [
	pngquant({
		quality: [0.7, 0.85],
	}),
	mozjpeg({
		quality: 85,
	}),
	imagemin.gifsicle(),
	imagemin.jpegtran(),
	imagemin.optipng(),
	imagemin.svgo({
		removeViewBox: false,
	}),
];

function images() {
	return gulp
		.src(paths.images.src, {
			since: gulp.lastRun(images),
		})
		.pipe(imagemin(imageminOption))
		.pipe(gulp.dest(paths.images.dest));
}
// remove mapfile
function cleanMapFiles() {
	return del([paths.styles.map, paths.scripts.map]);
}

// Lint Tasks
// HTML Lint
function htmlLint() {
	return gulp
		.src(paths.html.src)
		.pipe(htmlhint())
		.pipe(htmlhint.reporter());
}
// sass Lint
function sassLint() {
	return gulp.src(paths.styles.src).pipe(
		scsslint({
			config: 'scss-lint.yml'
		}),
	);
}
// ESLint
function esLint() {
	return gulp
		.src([paths.scripts.src, paths.scripts.jsx, './src/js/core/**/*.js'])
		.pipe(
			eslint({
				useEslintrc: true,
				fix: true,
			}),
		)
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

// browser refreshing and watch tasks
const browserSyncOption = {
	port: 8080,
	server: {
		baseDir: './dest',
		index: '/index.html',
		routes: {
			'/voting': 'voting'
		},
	},
	reloadOnRestart: true,
	notify: false,
};
function browsersync(done) {
	browserSync.init(browserSyncOption);
	done();
}

function watchFiles(done) {
	const browserReload = () => {
		browserSync.reload();
		done();
	};
	gulp.watch(paths.styles.src).on('change', gulp.series(styles, browserReload));
	gulp.watch(paths.scripts.src).on('change', gulp.series(scripts, esLint, browserReload));
	gulp.watch(paths.html.src).on('change', gulp.series(html, browserReload));
}

gulp.task('default', gulp.series(gulp.parallel(scripts, styles, html, images), gulp.series(browsersync, watchFiles)));

gulp.task('clean', cleanMapFiles);
gulp.task('imagemin', images);
gulp.task('sass-compress', sassCompress);
gulp.task('build', gulp.series(gulp.parallel(scripts, 'imagemin', 'sass-compress', html), 'clean'));
gulp.task('eslint', esLint);
gulp.task('html-lint', htmlLint);
gulp.task('sass-lint', sassLint);
gulp.task('test', gulp.series(sassLint, esLint, htmlLint));
