'use strict';

const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, function(err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB.');
  }
});

// In production environment, use webpack middleware for hot reloading.
const isProduction = process.env.NODE_ENV === 'production';

var app = express();

app.use(favicon(path.join(__dirname, 'src/assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/clients', require('./routes/clients'));
app.use('/animals', require('./routes/animals'));

if (!isProduction) {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const wpConfig = require('./webpack.config.js');
  const compiler = webpack(wpConfig);
  const wpMiddleware = webpackMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(wpMiddleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.join(__dirname, 'public')));
  app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
