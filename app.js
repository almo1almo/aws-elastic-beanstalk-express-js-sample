const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Al! This is a new test for the Pipleline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
