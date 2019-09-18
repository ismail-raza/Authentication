const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes');
const verification= require('./middleware/verification');

const db = require('./middleware/modelMiddleware');

dotenv.config();
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECT, err => {
    if (err) {
        console.log('Database could not connect');
        console.log(err.message);
        return
    }
    else {
        console.log('Database is connected');
    }
});

app.use(db);
app.use(Verification);
app.use('/', routes);

app.listen( process.env.PORT_NO, () => {

    const port= process.env.PORT_NO;
    console.log(`This request is listening at port ${port}`);
});