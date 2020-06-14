import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { restRouter } from './api';
import db from './config/db';
var cors = require('cors');
const dotenv = require('dotenv').config();
const app = express()


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

// var httpsServer = https.createServer(credentials,app);
// httpsServer.listen(port,function(){
// 	console.log("Server is running 443")
// });

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
