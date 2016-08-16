var gulp = require('gulp');

var fileinclude = require('gulp-file-include');//
import template from 'gulp-template';
import rename   from 'gulp-rename';
import path     from 'path';
var spawn = require('child_process').spawn; //利用child_process来启动node子线程
import yargs from 'yargs';


//编译html文件，对模块文件进行替换
gulp.task('fileinclude', function () {
    gulp.src(['./src/html_tpl/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/html'));
});
gulp.task('watch', function () {
    gulp.watch('src/html_tpl/**/*.html', ['fileinclude']);
});
//运行webpack
gulp.task('wp', function () {
    spawn('webpack');//启动webpack编译
    // spawn('webpack-dev-server', ['--hot', '--inline']);//启动webpack本地部署
    // spawn('gulp', ['watch']);//启动gulp watch任务
});




gulp.task('page',() =>{
    const cap = (val) =>{
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const outEjs = path.join(__dirname,'src/html_tpl');
    const outSass = path.join(__dirname,'src/sass/page');
    const outJs = path.join(__dirname,'src/js/page');


    gulp.src('./template/page/page.ejs')
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .on('error',err=>{
            console.log(err);
        })
        .pipe(rename((path) =>{
            path.basename = path.basename.replace('page',name);
        }))
        .pipe(gulp.dest(outEjs))



    ;

    gulp.src('./template/page/page.scss')
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename((path) =>{
            path.basename = path.basename.replace('page',name);
        }))
        .pipe(gulp.dest(outSass));

    gulp.src('./template/page/page.js')
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename((path) =>{
            path.basename = path.basename.replace('page',name);
        }))
        .pipe(gulp.dest(outJs));

});
