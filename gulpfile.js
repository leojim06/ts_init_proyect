'use strict';

const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

const TS_CONFIG = './tsconfig.json';

gulp.task('default', ['compile', 'deploy', 'watch', 'nodemon']);

gulp.task('clean', function () {
    return del('dist')
});

gulp.task('watch', function () {
    return gulp.watch('src/**/*.*', ['compile']);
})

gulp.task('compile', function () {
    let tsconfigSrc = ts.createProject(TS_CONFIG);
    return gulp.src('src/**/*.ts')
        .pipe(ts(tsconfigSrc))
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function () {
    return gulp.src(['package.json'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('nodemon', function () {
    nodemon({ script: './dist/app/server.js' });
});