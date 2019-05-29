const express = require('express');
const app = express();
const port = 3003;
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js')
const db = require('../database/index.js')

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/api', router)

app.listen(port, () => console.log(`App listening on port ${port}!`))