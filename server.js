const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');

// TODO: Refactor to connect locally once api server functionality works
// Connect to database
const DB = process.env.ATLAS.replace('<PASSWORD>', process.env.ATLAS_PASSWORD);
mongoose.connect(DB)
    .then(() => console.log('DB Connection successful!'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});