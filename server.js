'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 1234;

app.get('/', (req, res) => {
	const html = fs.readFileSync('./dist/index.html', 'utf-8');
	res.send(html);
})

app.listen(port, (err) => {
	if (err) {
		return console.log('Error is: ', err)
	}

	console.log(`server is listening on ${port}`)
})
