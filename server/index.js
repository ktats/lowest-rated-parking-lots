const express = require('express');
const app = express();
const path = require('path');
const port = 2000;
const bodyParser = require('body-parser')

const companyInfoHandler = require('./controllers/companyInfoHandler.js').companyInfoHandler;

app.use(bodyParser.text());
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));


app.get('/yelp/:location', companyInfoHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});