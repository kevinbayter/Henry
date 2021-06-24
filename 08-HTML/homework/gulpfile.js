const {
    series,
    src,
    dest,
    watch,
    parrallel
} = require("gulp");
const sass = require("gulp-sass");

/* Funciones que compila sass */
const paths = {
    scss: "scss/**/*.scss",
};

function css() {
    return src(paths.scss)
        .pipe(
            sass({
                outputStyle: "compact",
            })
        )
        .pipe(dest("./css"));
}

function watchArchivos() {
    watch(
        paths.scss,
        css
    );
}
exports.css = css;
exports.default = series(css, watchArchivos);