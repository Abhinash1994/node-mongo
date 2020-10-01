import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { restRouter } from './api';
import db from './config/db';
var cors = require('cors');
const dotenv = require('dotenv').config();
const app = express()
import path from 'path'


app.get('/',function(req,res){
	res.status(200).sendFile(path.join(__dirname,"public","index.html"))
})


/*connecting middleware*/
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
		return res.status(200).json({});
	}
	next();
});

/*connecting mongodb */
db();

/* Route handling */
app.use('/api', restRouter);

/*running server */
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
