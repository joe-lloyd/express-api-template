import exphbs from 'express-handlebars';

const hbs = exphbs.create({
	partialsDir: 'dist/views/partials/',
	layoutsDir: 'dist/views/layouts/',
	defaultLayout: 'main'
});

export default hbs;
