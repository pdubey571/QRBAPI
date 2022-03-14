var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');

const HttpError = require('./errors/HttpError');

var app = express();
app.use(cors(
  {
    origin:'*'
  }
))

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}))
app.use(bodyParser.raw({ limit: '10mb'}) );
//app.use(bodyParser.text());

// client.on('connect', function(err) {
//   if(!err)
//   console.log('Redis server conected!');
//   else
//   console.log('Redis server not conneted ');
// }); 



//client.set('name','rakesh')

//app.use('/', indexRouter);
app.use('/api', indexRouter);

app.use((req,res,next)=>{
    const error=new HttpError('Request not found',404);
    return next(error);
})

app.use((error,req,res,next)=>{
    if(res.headerSent)
        return next(error);
    res.status(error.code||500)
    res.json({message: error.message || 'Unknown error occured'});

})

// catch 404 and forwarsds to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
   
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error panpm ge
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
