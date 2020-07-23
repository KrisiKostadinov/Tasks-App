const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./config/db');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/users'));
app.use('/tasks', require('./routes/tasks'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started on port: ' + port));