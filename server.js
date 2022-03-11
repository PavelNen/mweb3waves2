const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.sendFile('/public/index.html', { root : __dirname});
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(__dirname);
	console.log("Listening Port " + port);
});