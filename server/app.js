require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', () => console.log("Connected to Database"))
.on('error', err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

// require('./routes/user') = module.exports of that file
app.use('/user', require('./routes/user'));
app.use('/ticket', require('./routes/ticket'));
app.use('/comment', require('./routes/comment'));

const port = 5000;

app.listen(port, () => {
    console.log('listening to port', port);
});