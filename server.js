const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');

// Connect to database
const DB = process.env.DATABASE_LOCAL.replace('<DATABASE_NETWORK>', process.env.DATABASE_NETWORK);
mongoose.connect(DB)
    .then(() => console.log('DB Connection successful!'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});