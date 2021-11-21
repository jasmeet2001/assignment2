/*
Author: Jasmeet Kaur
Student#: 301166458
Description: Assignment2

*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import mongoose, {mongo} from 'mongoose';

//modules for authentication


import passport from 'passport';
import passportLocal from 'passport-local';
let localStrategy = passportLocal.Strategy;
import flash from 'connect-flash';

import indexRouter from '../Routes/index';

const app = express();
export default app;

//DB Configuration
import * as DBConfig from './db';
mongoose.connect((DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI, {useNewUrlParser : true, useUnifiedTopology : true})

const db = mongoose.connection; //alias for mongoose connection
db.on("error", function()
{
  console.error("Connection Error");
});
db.once("open", function()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);

});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);
//setup express session
app.use(session({
  Secret : "SomeSecret",
  saveUninitialized: false,
  resave: false
}))
//initialize flash
app.use(flash());
//initialize passport
app.use(passport.initialize());
app.use(passport.session());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

// module.exports = app;
