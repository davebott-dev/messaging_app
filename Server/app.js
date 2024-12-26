require('dotenv').config();
const express = require('express');
const apiRoute= require('./routes/api');

const app = express();
app.use('/api',apiRoute);


app.listen(8080, ()=> console.log('the server is listening on port 8080'));