import '@babel/polyfill';
import express from 'express';
import logger from 'morgan';
import routes from './routes';
import bodyParser from 'body-parser';
import exphbs from './services/singletons/exphbs';
import * as dotenv from  'dotenv';

const app = express();
dotenv.config();

// view engine setup
app.set('views', 'dist/views');
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs.engine);

// Serves logging in the terminal
app.use(logger('dev'));

// Sets the static assets folder
app.use(express.static('dist/assets'));

// Converts form inputs to object
app.use(bodyParser.json({type: 'application/json'}));

// Routing with middleware
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	console.log(err);
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
