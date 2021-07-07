/* eslint-disable max-len */
const express = require('express');
const logger = require('morgan');
const http = require('http');
const app = express();
const cors = require('cors');
const porthttp = process.env.PORT_HTTP || 5000;
const hostname = require('./utils/localhost');
const indexRouter = require('./routes/index');

app.use(cors());
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/', indexRouter);

const httpServer = http.createServer(app);

httpServer.listen(porthttp, () => {
    console.log(`Server berjalan pada host ${hostname} dan port ${porthttp}`);
});
