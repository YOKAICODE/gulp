const copyFiles = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

const copyFavicons = () => {
  return app.gulp
    .src(app.path.src.favicons)
    .pipe(app.gulp.dest(app.path.build.root));
};

export { copyFiles, copyFavicons };
