const mongoose = require('mongoose');

const url = process.env.DB_URI;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, () => {
    console.log('DB connected!');
});