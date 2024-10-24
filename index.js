const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const __path = process.cwd();

const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
res.sendFile(path.join(__path, 'index.html'));
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;