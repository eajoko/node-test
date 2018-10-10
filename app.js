const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Mongodb

mongoose.connect('mongodb://localhost/node-test', {
	useNewUrlParser: true
})
.then(()=> console.log('MongoDb Connected'))
.catch(err => console.log(err));

// Handlenars Middleware
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Route

app.get('/', (req, res) => {
	const title = 'Ubaah'
	res.render('index', {
		title: title
	});
})

app.get('/test', (req, res) => {
	res.render('test');
})

const port = 8000
app.listen(port, () => {
	console.log('Server start on port ' + port );
})