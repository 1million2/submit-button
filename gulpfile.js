const {src, dest, series, watch} = require("gulp")
const sass = require('gulp-sass')(require('sass'));
const csso = require("gulp-csso")
const del = require("del")
const include = require("gulp-file-include")
const htmlmin = require("gulp-htmlmin")
const concat = require("gulp-concat")
const autoprefixer = require("gulp-autoprefixer");
const { notify } = require("browser-sync");
const sync = require("browser-sync").create()

function html() {
	return src("src/**.html")
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest("dist"))
}
function js() {
	return src("src/**.js")
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest("dist"))
}

function scss () {
	return src("src/scss/**.scss")
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 2 versions"]
		}))
		.pipe(csso())
		.pipe(concat("index.css"))
		.pipe(dest("dist"))
}

function clear () {
	return del("dist/*.{css,html}")
}

function serve () {
	sync.init({
		server: "./dist",
		notify: false
	})

	watch("src/**.html", series(html)).on("change", sync.reload)
	watch("src/scss/**.scss", series(scss)).on("change", sync.reload)
	watch("src/**.js", series(js)).on("change", sync.reload)
}

exports.build = series(clear, scss, html)
exports.serve = series(clear, scss, html, js, serve)
exports.clear = clear